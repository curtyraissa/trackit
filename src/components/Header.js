import styled from "styled-components"
import trackit from"../assets/trackit.png"
import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <HeaderContainder data-test="header">
      <Link to="/"><img src={trackit} alt="logo"/></Link>
      <img className="usuario" src={trackit} alt="usuario"/>
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
  background: #126BA5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  .usuario{
    width: 51px;
    height: 51px;
    border-radius: 50%;
  }
`