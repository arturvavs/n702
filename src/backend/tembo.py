from fastapi import FastAPI,HTTPException
import psycopg
from pydantic import BaseModel
from typing import Optional, List
import datetime
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from passlib.context import CryptContext
import os
from dotenv import load_dotenv
import bcrypt


load_dotenv()
app = FastAPI()
DATABASE_URL = os.getenv("URL")


origins = ["http://localhost:5173"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class LoginData(BaseModel):
    username: str
    password: str

def db_connect():
    return psycopg.connect(DATABASE_URL)


@app.get('/')
def homepage():
    return {'message':'homepage'}


@app.post('/login')
async def user_login(login: LoginData):
    conn = db_connect()
    cursor = conn.cursor()
    sql = "SELECT cd_pessoa_fisica, ds_senha FROM pessoa_fisica WHERE ds_email = %s"
    cursor.execute(sql, (login.username,))  # Passando como uma tupla com vírgula
    user = cursor.fetchone()
    conn.close()
    
    if user:
        if login.password:  # Verifica se a senha foi fornecida
            password_hash = user[1]
            if bcrypt.checkpw(login.password.encode('utf-8'), password_hash):  # .encode('utf-8') vai servir para converter a senha em bytes
                return JSONResponse(content={"message": "Login realizado com sucesso", "user_id": user[0]})
            else:
                raise HTTPException(status_code=401, detail="Senha incorreta")
        else:
            raise HTTPException(status_code=400, detail="Senha não fornecida")
    else:
        raise HTTPException(status_code=401, detail="Usuário não encontrado")


@app.get('/search')
def search_users():
    conn = db_connect()
    cursor = conn.cursor()
    sql = "SELECT cd_pessoa_fisica,nm_pessoa_fisica,dt_nascimento,ie_sexo,nr_contato,nr_cpf,ds_email FROM pessoa_fisica"
    cursor.execute(sql)
    data = []
    users = cursor.fetchall()
    for i in users:
        data.append({
            'ID':i[0],
            'NOME':i[1],
            'DN':i[2],
            'SEXO':i[3],
            'CONTATO':i[4],
            'CPF':i[5],
            'EMAIL':i[6],
        })
    return jsonable_encoder(data)