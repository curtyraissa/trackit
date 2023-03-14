import styled from "styled-components"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export const CadastroPage = () => {
  const [cadastrar, setCadastrar] = useState({
    email: "",
    name: "",
    image: "",
    password: ""
  })

  useEffect(()=>{
    const promise = axios.post(`${BASE_URL}/auth/sign-up`)
    promise.then(res => { console.log()})
    promise.catch(err => { alert("Faltou preencher os dados!")})
  }, [])

  function criarCadastro(e) {
    e.preventDefault()
  }

  return (
    <PageContainer>
      <img src={logo} alt="logo" />
      <Form onSubmit={criarCadastro}>
        <input type="email" value={email} placeholder="E-mail" onChange={e => setCadastrar(e.target.value)} required />
        <input type="password" value={password} placeholder="Senha" onChange={e => setCadastrar(e.target.value)} required />
        <input type="text" value={name} placeholder="Nome" onChange={e => setCadastrar(e.target.value)} required />
        <input type="text" value={image} placeholder="Foto" onChange={e => setCadastrar(e.target.value)} required />
        <button type="submit">Cadastrar</button>
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