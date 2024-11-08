from fastapi import FastAPI,HTTPException
import psycopg
from pydantic import BaseModel
from typing import Optional, List
import datetime
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from passlib.context import CryptContext

app = FastAPI()
DATABASE_URL = "postgresql://postgres:2HX65AhhiJCMXfTt@pointedly-ideal-satyr.data-1.use1.tembo.io:5432/postgres"

origins = ["http://localhost:5173"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
conn = psycopg.connect(DATABASE_URL)
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
    sql = "SELECT nr_sequencia,nr_contato FROM pessoa_fisica WHERE email = %s and nr_contato = %s"
    cursor.execute(sql, (login.username,login.password))  # Passando como uma tupla com vírgula
    user = cursor.fetchone()
    #conn.close()
    if user:
        if login.password == user[1]:
            return {"user": user[0], "message": "Login realizado com sucesso"}
    else:
        raise HTTPException(status_code=401, detail="Usuário não encontrado ou senha incorreta")

