import axios from "axios"
import { useContext, useState } from "react"
import { ThreeDots } from "react-loader-spinner"
import { Link, useNavigate } from "react-router-dom"
import UserContext from "../../contexts/UserContext"
import { BASE_URL } from "../../constants/data"
import logo from "../../assets/logo.png"
import { LoginContainer } from "./LoginStyle"

export const LoginPage = () => {
    const [signIn, setSignIn] = useState({ email: "", password: "" })
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext)

    function signInUser(e) {
        e.preventDefault()
        setLoading(true)
        const promise = axios.post(`${BASE_URL}/auth/login`, signIn)
        promise.then(res => {
            setLoading(false)
            setUser({ image: res.data.image, token: res.data.token })
            navigate("/hoje")
        })
        promise.catch(res => {
            alert(`Preencha os campos corretamente! ${res.response.data.message}`)
            setLoading(false)
        })
    }

    return (
        <LoginContainer disable={loading}>
            <img src={logo} alt="logo" />
            <form onSubmit={signInUser}>
                <input data-test="email-input" type="email" name="email" placeholder="email" required
                    onChange={(e) => setSignIn({ ...signIn, [e.target.name]: e.target.value })} disabled={loading} />
                <input data-test="password-input" type="password" name="password" placeholder="senha" required
                    onChange={(e) => setSignIn({ ...signIn, [e.target.name]: e.target.value })} disabled={loading} />
                <button data-test="login-btn" type="submit">
                    {loading ? <ThreeDots color="#FFF" height={50} width={50} /> : "Entrar"}
                </button>
            </form>
            <Link data-test="signup-link" to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </LoginContainer>
    )
}