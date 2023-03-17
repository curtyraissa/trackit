import { Link } from "react-router-dom"
import styled from "styled-components"
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useContext } from "react";

export const Footer = () => {
  const { progress } = useContext(ProgressContext)

  return (
    <FooterContainder data-test="menu">
      <Link data-test="habit-link" to="/habitos"><p>Hábitos</p></Link>
      <Link data-test="today-link" to="/hoje">
        <Circular>
        <CircularProgressbar 
          text="Hoje"
          backgroundPadding={9} 
          strokeWidth={8}
          value={progress} 
          background
        />
        </Circular>
      </Link>
      <Link data-test="history-link" to="/historico"><p>Histórico</p></Link>
    </FooterContainder>
  )
}

const FooterContainder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  width: 100%;
  height: 70px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: fixed;
  bottom: 0;
  left: 0;
  p {
    font-size: 18px;
    color: #52B6FF;
  }
  a {
    text-decoration: none;
  }
`

export const Circular = styled.div`
  height: 85px;
  width: 95px;
  margin-bottom: 60px;
  font-size: 20px;
  
  .CircularProgressbar-path {
    stroke: #ffffff;
  }
  .CircularProgressbar-trail {
    stroke: #52B6FF;
  }
  .CircularProgressbar-text {
    fill: #ffffff;
    text-align: start;
  }
  .CircularProgressbar-background {
    fill: #52B6FF;
  }
`