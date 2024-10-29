import React, { useState } from 'react';
import Parse from 'parse/dist/parse.min.js';
import { TextField } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';

export const CadastroUsuario: React.FC = () => {

    const [PatientName, setNome] = useState('');
    const [Email, setEmail] = useState(''); 
    const [BirthDate, setDataNascimento] = useState('');
    const [CPFNumber, setCpf] = useState('');
    const [Phone, setTelefone] = useState('');
    const [Address, setEndereco] = useState('');
    const [AddressNumber, setNumeroEndereco] = useState('');
    const [Password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleCadastro = async () => {
        const user = new Parse.User();
        user.set('PatientName', PatientName);
        user.set('username', Email);
        user.set('email', Email);
        user.set('BirthDate', BirthDate ? new Date(BirthDate) : undefined);
        user.set('CPF', CPFNumber);
        user.set('Phone', Phone);
        user.set('Address', Address);
        user.set('AddressNumber', AddressNumber);
        user.set('password', Password);

        try {
          await user.signUp();
          alert('Usuário cadastrado com sucesso!');
          navigate("/");
        } catch (err) {
          if (err instanceof Error) {
            alert(`Erro ao cadastrar usuário:  ${err.message}`);
          } else {
            alert('Erro desconhecido ao cadastrar usuário.');
          }
          console.log(Parse.User.current());
        }
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
            value={PatientName}
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
            value={Email}
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
            value={BirthDate}
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
            value={CPFNumber}
            label="Apenas números"
            onChange={(e) => setCpf(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Telefone:</label>
        <TextField
            required
            fullWidth 
            type="text"
            value={Phone}
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
            value={Address}
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
            value={AddressNumber}
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
            value={Password}
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