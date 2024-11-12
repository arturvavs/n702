from fastapi import FastAPI,HTTPException
import psycopg
from pydantic import BaseModel
from typing import Optional, List
from datetime import date, datetime, time, timedelta
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


origins = ["http://localhost:5173","https://n702-henna.vercel.app"]
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

class PessoaFisica(BaseModel):
    nm_pessoa_fisica: str
    ds_email: str
    dt_nascimento: date
    nr_cpf: str
    nr_contato: str
    ds_endereco: str
    nr_numero_endereco: str
    ds_senha: str
    ie_sexo: str

class DataAgendamento(BaseModel):
    dt_agenda: date
    hr_agenda: datetime
    ie_status: str

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

@app.post('/cadastro')
def register_user(pf: PessoaFisica):
    
    pf.ds_senha = bcrypt.hashpw(pf.ds_senha.encode('utf-8'),bcrypt.gensalt())
    if pf.ie_sexo == 'Masculino':
        pf.ie_sexo = 'M'
    elif pf.ie_sexo == 'Feminino':
        pf.ie_sexo = 'F'
    else:
        pf.ie_sexo = 'I'
    conn = db_connect()
    cursor = conn.cursor()
    values = (pf.nm_pessoa_fisica,pf.dt_nascimento,pf.ie_sexo,pf.nr_contato,pf.nr_cpf,pf.ds_senha,pf.ds_email,pf.ds_endereco,pf.nr_numero_endereco)
    sql = "INSERT INTO pessoa_fisica(nm_pessoa_fisica,dt_nascimento,ie_sexo,nr_contato,nr_cpf,ds_senha,ds_email,ds_endereco,nr_numero_endereco) VALUES(%s,%s,%s,%s,%s,%s,%s,%s,%s)"
    try:
        cursor.execute(sql, values)
        conn.commit()
    except Exception as e:
        conn.rollback()
        raise e
    finally:
        cursor.close()
        conn.close()
    return {"status": "sucesso", "message": "Usuário cadastrado com sucesso!"}

@app.get('/agendamento/{dt_agenda}')
def search_date(dt_agenda: date):
    conn = db_connect()
    cursor = conn.cursor()
    horarios = []
    sql = "SELECT to_char(hr_agenda,'hh24:mi') FROM agenda_paciente WHERE dt_agenda = %s AND ie_status = 'Pendente' ORDER BY 1 ASC"
    values = (dt_agenda,)
    
    try:
        cursor.execute(sql, values)
        data = cursor.fetchall()
        for i in data:
            horarios = [i[0] for i in data]
    except Exception as e:
        raise e
    finally:
        cursor.close()
        conn.close()
    
    return jsonable_encoder(horarios)