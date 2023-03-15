import styled from "styled-components"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { ThreeDots } from 'react-loader-spinner'
import { useState } from "react"
import { BASE_URL } from '../../constants/urls'
import logo from "../../assets/logo.png"


export const CadastroPage = () => {
  const [form, setForm] = useState({ email: "", password: "", name: "", image: "" })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function handleForm(e) {
    const { name, value } = e.value
    setForm({ ...form, [name]: value })
  }

  function criarCadastro(e) {
    e.preventDefault()
    setLoading(true)

    axios.post(`${BASE_URL}/auth/sign-up`, form)
    .then(() => {
      setLoading(false)
      navigate("/")
    })
    .catch(err => {
      alert(`Preencha os campos corretamente! ${err.response.data.details[0]}`)
      setLoading(false)
      console(err)
    })
  }

  return (
    <PageContainer disable={loading}>
      <img src={logo} alt="logo" />
      <Form onSubmit={criarCadastro}>
        <input
          type="email"
          placeholder="E-mail"
          name={email}
          value={form.email}
          onChange={handleForm}
          disabled={loading}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          name={password}
          value={form.password}
          onChange={handleForm}
          required
        />
        <input
          type="text"
          placeholder="Nome"
          name={name}
          value={form.name}
          onChange={handleForm}
          required
        />
        <input
          type="text"
          placeholder="Foto"
          name={image}
          value={form.image}
          onChange={handleForm}
          required
        />
        <button type="submit">
          {loading ? <ThreeDots color="#FFFFFF" height={50} width={50} /> : 'Cadastrar'}
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
    color: ${({ disable }) => disable ? '#AFAFAF' : '#DBDBDB'};
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