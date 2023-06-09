import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import UserContext from "../../contexts/UserContext"
import { HeaderContainer, Logout, Perfil } from "./HeaderStyle"

export const Header = () => {
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()

  function logout() {
    localStorage.clear()
    setUser({})
    navigate("/")
  }

  return (
    <HeaderContainer data-test="header">
      <Link to="/habitos"><h1>TrackIt</h1></Link>
      <Perfil>
        <Logout onClick={logout}>
          <ion-icon name="log-out-outline"></ion-icon>
          <p>Logout</p>
        </Logout>
        <img src={user.image} alt="profile" />
      </Perfil>
    </HeaderContainer>
  )
}