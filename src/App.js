import { useLocation } from "react-router-dom";
import { Router } from "./router/Router";
import { ProgressProvider } from "./contexts/ProgressContext";
import { UserProvider } from "./contexts/UserContext";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { GlobalStyle } from "./styles/GlobalStyle";

export default function App() {
  const location = useLocation()
  const isLogin = location.pathname !== "/" && location.pathname !== "/cadastro" ? true : false

  return (
    <ProgressProvider>
      <UserProvider>
        <GlobalStyle isLogin={isLogin} />
        {isLogin ? <Header /> : ""}
        <Router />
        {isLogin ? <Footer /> : ""}
      </UserProvider>
    </ProgressProvider>
  )
}