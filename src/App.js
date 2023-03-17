import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react"
import { ProgressProvider } from "./contexts/ProgressContext";
import UserContext, { UserProvider } from "./contexts/UserContext";
import { LoginPage } from "./pages/LoginPage/LoginPage"
import { CadastroPage } from "./pages/CadastroPage/CadastroPage"
import { HabitosPage } from "./pages/HabitosPage/HabitosPage"
import { HojePage } from "./pages/HojePage/HojePage"
import { HistoricoPage } from "./pages/HistoricoPage/HistoricoPage"
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  const isLogin = location.pathname !== '/' && location.pathname !== '/cadastro' ? true : false
  const { user } = useContext(UserContext)
  const userLogged = user.token !== undefined

  return (
    <ProgressProvider>
      <UserProvider>

        <BrowserRouter>
          <Routes>

          <GlobalStyle isLogin={isLogin} />
                {isLogin ? <Header /> : ''}
               
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<CadastroPage />} />

            <Route path={userLogged ? "/habitos" : "*"} element={userLogged ? <HabitosPage /> : <Navigate to="/" replace />} />
            <Route path={userLogged ? "/hoje" : "*"} element={userLogged ? <HojePage /> : <Navigate to="/" replace />} />
            <Route path={userLogged ? "/historico" : "*"} element={userLogged ? <HistoricoPage /> : <Navigate to="/" replace />} />

            {isLogin ? <Footer /> : ''}

          </Routes>
        </BrowserRouter>

      </UserProvider>
    </ProgressProvider>
  );
}

export default App;
