import { BrowserRouter, Route, Routes as Switch } from "react-router-dom"
import { Login } from "../pages/login/Login"
import { CadastroUsuario } from "../pages/cadastro/CadastroUsuario"
import { UserPager } from "../pages/user_page/UserPage"
import PrivateRoute from "../components/PrivateRoute"
import { Agendamento } from "../pages/user_page/Agendamento"

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path ="/login" element={<Login />}/>
                <Route path ="/gerenciamento" element={<PrivateRoute><UserPager /></PrivateRoute>}/>
                <Route path ="/cadastroUsuario" element={<CadastroUsuario />}/>
                <Route path ="/agendamento" element={<Agendamento />} />
            </Switch>
        </BrowserRouter>
    )
} 