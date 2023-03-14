import styled from "styled-components"

export const Footer = () => {
  return (
    <HeaderContainder>
      <p>Hábitos</p>
        img
      <p>Histórico</p>
    </HeaderContainder>
  )
}

const HeaderContainder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  width: 100%;
  height: 70px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  p {
    font-size: 18px;
    color: #52B6FF;
    text-align: start;
  }
`