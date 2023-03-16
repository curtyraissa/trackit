import styled from "styled-components"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { ThreeDots } from 'react-loader-spinner'
import { useState } from "react"
import { BASE_URL } from '../../constants/urls'
import logo from "../../assets/logo.png"

export const LoginPage = () => {
  const [loginForm, setloginForm] = useState({ email: "", password: "" })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function logar(e) {
    e.preventDefault()
    setLoading(true)

    axios.post(`${BASE_URL}/auth/login`, loginForm)
        .then((res) => {
        setLoading(false)
        navigate("/hoje")
        console.log(res)
      })
      .catch(err => {
        alert(`Os dados estão incorretos! ${err.response.data.message}`)
        setLoading(false)
        console(err.response.data.message)
      })
  }

  console.log(`${BASE_URL}/auth/login`)
  return (
    <PageContainer disable={loading}>
      <img src={logo} alt="logo" />
      <Form onSubmit={logar}>
        <input
          data-test="email-input"
          type="email"
          placeholder="E-mail"
          name="email"
          onChange={(e) => setloginForm({ ...loginForm, [e.target.name]: e.target.value })}
          disabled={loading}
          required
        />
        <input
          data-test="password-input"
          type="password"
          placeholder="Senha"
          name="password"
          onChange={(e) => setloginForm({ ...loginForm, [e.target.name]: e.target.value })}
          disabled={loading}
          required
        />
        <button data-test="login-btn" type="submit">
          {loading ? <ThreeDots color="#FFF" height={50} width={50} /> : 'Entrar'}
        </button>
      </Form>
      <Link data-test="singup-lik" to="/cadastro"><Text>Não tem uma conta? Cadastre-se!</Text></Link>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 130px 35px;

  img {
    margin-bottom: 30px;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;

  input {
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    width: 303px;
    height: 45px;
    font-size: 18px;
    padding: 10px;
  }

  button {
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 5px;
    border: none;
    font-size: 20px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

const Text = styled.div`
  margin-top: 25px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  text-decoration-line: underline;
  color: #52B6FF;
`