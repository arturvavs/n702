import { BrowserRouter, Route, Routes as Switch } from "react-router-dom"
import { Login } from "../pages/login/Login"
import { CadastroUsuario } from "../pages/cadastro/CadastroUsuario"
import { UserPager } from "../pages/user_page/UserPage"
import PrivateRoute from "../components/PrivateRoute"

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path ="/" element={<Login />}/>
                <Route path ="/gerenciamento" element={<PrivateRoute><UserPager /></PrivateRoute>}/>
                <Route path ="/cadastroUsuario" element={<CadastroUsuario />}/>
            </Switch>
        </BrowserRouter>
    )
} 