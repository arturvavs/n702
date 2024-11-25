import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { login } from '../../authService'
import apiClient from "../../apiClient";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const Login: React.FC = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(username, password);
      console.log(response);
  
      // Armazenando o cd_pessoa_fisica no localStorage
      sessionStorage.setItem('cd_pessoa_fisica', response.user_id);
      console.log("cd_pessoa_fisica",response.user_id)
      navigate("/agendamento"); 
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Ocorreu um erro inesperado.");
      }
    }
  };

  
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <p>{error}</p>}
        <form>
          <div className="mb-4">
            <TextField 
              required
              fullWidth
              id="outlined-required"
              label="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <FormControl variant="outlined" fullWidth> 
              <InputLabel htmlFor="outlined-adornment-password"> 
                Senha *
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end"> 
                    <IconButton 
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </div>
          <button
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200"
            onClick={handleLogin}
          >
            Logar
          </button>
          <div className="text-center mt-4">
            <a href="/cadastroUsuario" className="text-blue-500 hover:underline">
              Cadastre-se
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};