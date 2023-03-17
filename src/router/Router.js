import { useContext } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import UserContext from "../contexts/UserContext"
import { LoginPage } from "../pages/LoginPage/LoginPage"
import { CadastroPage } from "../pages/CadastroPage/CadastroPage"
import { HojePage } from "../pages/HojePage/HojePage"
import { HabitosPage } from "../pages/HabitosPage/HabitosPage"
import { HistoricoPage } from "../pages/HistoricoPage/HistoricoPage"

export const Router = () => {
    const { user } = useContext(UserContext)
    const userLogged = user.token !== undefined

    return (
        <Routes>
            <Route path="/" element={userLogged ? <Navigate to="/hoje" replace /> : <LoginPage />} />
            <Route path="/cadastro" element={<CadastroPage />} />
            <Route path={userLogged ? "/hoje" : "*"} element={userLogged ? <HojePage /> : <Navigate to="/" replace />} />
            <Route path={userLogged ? "/habitos" : "*"} element={userLogged ? <HabitosPage /> : <Navigate to="/" replace />} />
            <Route path={userLogged ? "/historico" : "*"} element={userLogged ? <HistoricoPage /> : <Navigate to="/" replace />} />
        </Routes>
    )
}