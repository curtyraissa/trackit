import styled from "styled-components"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { IconePlus } from "../../components/IconePlus"

export const HabitosPage = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <TextContainer>
          <h1>Meus hábitos</h1>
          <IconePlus />
        </TextContainer>
        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
      </PageContainer>
      <Footer />
    </>
  )
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #E5E5E5;
  height: 100vh;
  padding: 0 30px;
  p {
    font-size: 18px;
    color: #666666;
    text-align: start;
  }
`

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 30px 0;
  h1 {
    font-size: 22px;
    color: #126BA5;
  }
`