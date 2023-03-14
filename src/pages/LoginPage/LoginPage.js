import styled from "styled-components"

export const LoginPage = () => {
  
  function logar(e) {
    e.preventDefault()
  }
  
  return (
    <PageContainer>
      <img/>
      <Form onSubmit={logar}>
        <input type="email" placeholder="E-mail" required />
        <input type="password" placeholder="Senha" required/>
        <button type="submit">Entrar</button>
      </Form>
      <Text>Não tem uma conta? Cadastre-se!</Text>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #E5E5E5;
  margin: 200px 35px;
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