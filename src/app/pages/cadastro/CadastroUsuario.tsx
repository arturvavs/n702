import React, { useState } from 'react';
//import Parse from 'parse/dist/parse.min.js';
import axios from 'axios';
import { MenuItem, Select, TextField } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';

export const CadastroUsuario: React.FC = () => {

    const [nm_pessoa_fisica, setNome] = useState('');
    const [ds_email, setEmail] = useState(''); 
    const [dt_nascimento, setDataNascimento] = useState('');
    const [nr_cpf, setCpf] = useState('');
    const [ie_sexo, setSexo] = useState('');
    const [nr_contato, setTelefone] = useState('');
    const [ds_endereco, setEndereco] = useState('');
    const [nr_numero_endereco, setNumeroEndereco] = useState('');
    const [ds_senha, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleCadastro = async () => {
      try {
        // Enviar requisição para o backend
        const response = await axios.post("https://n702.onrender.com/cadastro", {
          nm_pessoa_fisica,
          ds_email,
          dt_nascimento,
          nr_cpf,
          nr_contato,
          ds_endereco,
          nr_numero_endereco,
          ds_senha,
          ie_sexo
        }
      );
      if (response.status === 200) {
        // Navegar para outra página ou exibir uma mensagem de sucesso
        navigate('/'); // Exemplo
      }
      } catch (err) {
      setError("Falha ao realizar cadastro");
      };
        
    };


  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Seu Cadastro</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Nome Completo:</label>
        <TextField
            required
            fullWidth
            label="Obrigatório"  
            type="text"
            value={nm_pessoa_fisica}
            onChange={(e) => setNome(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Email:</label>
        <TextField
            required
            fullWidth
            label="Obrigatório"  
            type="email"
            value={ds_email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Data de Nascimento:</label>
        <TextField
            required
            fullWidth  
            type="date"
            value={dt_nascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">CPF:</label>
        <TextField
            required
            fullWidth
            type="text"
            value={nr_cpf}
            label="Apenas números"
            onChange={(e) => setCpf(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Sexo:</label>
        <Select
          required
          fullWidth
          value={ie_sexo}
          onChange={(e) => setSexo(e.target.value)}
          displayEmpty
          className="w-full p-2 border border-gray-300 rounded"
        >
          <MenuItem value="" disabled>
            Selecione o sexo
          </MenuItem>
          <MenuItem value="Masculino">Masculino</MenuItem>
          <MenuItem value="Feminino">Feminino</MenuItem>
          <MenuItem value="Indefinido">Indefinido</MenuItem>
        </Select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Telefone:</label>
        <TextField
            required
            fullWidth 
            type="text"
            value={nr_contato}
            label="Apenas números"
            onChange={(e) => setTelefone(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4 flex space-x-4">
        <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Endereço:</label>
            <TextField
            required
            type="text"
            value={ds_endereco}
            label="Endereço"
            onChange={(e) => setEndereco(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            />
      </div>

      <div className="w-1/3">
            <label className="block text-sm font-medium mb-1">Número:</label>
            <TextField
            required
            fullWidth
            type="text"
            value={nr_numero_endereco}
            label="Número"
            onChange={(e) => setNumeroEndereco(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            />
      </div>
    </div>

    <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Senha:</label>
        <TextField
            required
            fullWidth
            label="Obrigatório"  
            type="password"
            value={ds_senha}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <button
        onClick={handleCadastro}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Finalizar Cadastro
      </button>
    </div>
  );
};
