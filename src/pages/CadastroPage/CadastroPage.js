import styled from "styled-components"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { ThreeDots } from 'react-loader-spinner'
import { useState } from "react"
import { BASE_URL } from '../../constants/urls'
import logo from "../../assets/logo.png"


export const CadastroPage = () => {
  const [cadastroForm, setCadastroForm] = useState({ email: "", password: "", name: "", image: "" })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  // fiz direto no input, nao funcionou desse jeito
  // function handleForm(e) {
  //   const { name, value } = e.value
  //   setCadastroForm({ ...cadastroForm, [name]: value })
  // }

  function cadastrar(e) {
    e.preventDefault()
    setLoading(true)

    axios.post(`${BASE_URL}/auth/sign-up`, cadastroForm)
      .then((res) => {
        setLoading(false)
        navigate("/")
        console.log(res)
      })
      .catch(err => {
        alert(`Os dados estão incorretos! ${err.response.data}`)
        setLoading(false)
        console(err.response.data.details[0])
      })
  }

  return (
    <PageContainer disable={loading}>
      <img src={logo} alt="logo" />
      <Form onSubmit={cadastrar}>
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          // onChange={handleForm}
          onChange={(e) => setCadastroForm({ ...cadastroForm, [e.target.name]: e.target.value })}
          disabled={loading}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          name="password"
          // onChange={handleForm}
          onChange={(e) => setCadastroForm({ ...cadastroForm, [e.target.name]: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Nome"
          name="name"
          // onChange={handleForm}
          onChange={(e) => setCadastroForm({ ...cadastroForm, [e.target.name]: e.target.value })}
          disabled={loading}
          required
        />
        <input
          type="text"
          placeholder="Foto"
          name="image"
          // onChange={handleForm}
          onChange={(e) => setCadastroForm({ ...cadastroForm, [e.target.name]: e.target.value })}
          disabled={loading}
          required
        />
        <button type="submit">
          {loading ? <ThreeDots color="#FFFFFF" height={50} width={50} /> : 'Cadastrar'}
          {/* <ThreeDots color="#FFFFFF" height={50} width={50} /> */}
        </button>
      </Form>
      <Link to="/"><Text>Já tem uma conta? Faça login!</Text></Link>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #E5E5E5;
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
    color: ${({ disable }) => disable ? '#DBDBDB' : '#AFAFAF'};
    background: ${({ disable }) => disable ? '#F2F2F2' : '#FFFFFF'};
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