// src/api/authService.js
import apiClient from './apiClient';

export const login = async (username, password) => {
  try {
    const response = await apiClient.post('/', { username, password });
    return response.data; 
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error("Credenciais incorretas. Verifique o usuário e senha.");
    } else {
      throw new Error("Erro de conexão. Tente novamente mais tarde.");
    }
  }
};

export const register = async() => {
  try {
    const response = await apiClient.post('/cadastro', { nm_pessoa_fisica,
      ds_email,
      dt_nascimento,
      nr_cpf,
      nr_contato,
      ds_endereco,
      nr_numero_endereco,
      ds_senha,
      ie_sexo });
    return response.data; }

    catch (error){
    if (error.response && error.response.status === 401) {
      throw new Error("Credenciais incorretas. Verifique o usuário e senha.");
    } else {
      throw new Error("Erro de conexão. Tente novamente mais tarde.");
    }
  }

};

export const getAvailableTimes = async (dt_agenda) => {
  try {
    const response = await apiClient.get(`/agendamento/${dt_agenda}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 404) {
        throw new Error("Não há horários disponíveis para a data selecionada.");
      } else {
        throw new Error("Erro ao buscar horários. Tente novamente mais tarde.");
      }
    } else {
      throw new Error("Erro de conexão. Tente novamente mais tarde.");
    }
  }
};

export const getPessoaFisicaId = () => {
  return sessionStorage.getItem('cd_pessoa_fisica');
};