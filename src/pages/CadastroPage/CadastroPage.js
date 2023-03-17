import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/logo.png"
import { LoginContainer } from "../LoginPage/LoginStyle"
import { BASE_URL } from "../../constants/data"
import { useState } from "react"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"

export const CadastroPage = () => {
    const [signUp, setSignUp] = useState({
        email: "",
        name: "",
        image: "",
        password: ""
    })
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    function signUpUser(e) {
        e.preventDefault()
        setLoading(true)
        const promise = axios.post(`${BASE_URL}/auth/sign-up`, signUp)
        promise.then(() => {
            setLoading(false)
            navigate("/")
        })
        promise.catch(res => {
            alert(`Preencha os campos corretamente! ${res.response.data.details[0]}`)
            setLoading(false)
        })
    }

    return (
        <LoginContainer disable={loading}>
            <img src={logo} alt="logo" />
            <form onSubmit={signUpUser}>
                <input data-test="email-input" type="email" name="email" placeholder="email" required
                    onChange={(e) => setSignUp({ ...signUp, [e.target.name]: e.target.value })} disabled={loading} />
                <input data-test="password-input" type="password" name="password" placeholder="senha" required
                    onChange={(e) => setSignUp({ ...signUp, [e.target.name]: e.target.value })} disabled={loading} />
                <input data-test="user-name-input" type="text" name="name" placeholder="nome" required
                    onChange={(e) => setSignUp({ ...signUp, [e.target.name]: e.target.value })} disabled={loading} />
                <input data-test="user-image-input" type="text" name="image" placeholder="foto" required
                    onChange={(e) => setSignUp({ ...signUp, [e.target.name]: e.target.value })} disabled={loading} />
                <button data-test="signup-btn" type="submit">
                    {loading ? <ThreeDots color="#FFF" height={50} width={50} /> : "Cadastrar"}
                </button>
            </form>
            <Link data-test="login-link" to="/">
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </LoginContainer>
    )
}