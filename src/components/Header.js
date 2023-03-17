import styled from "styled-components"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

export const Header = () => {
  const { user } = useContext(UserContext)

  return (
    <HeaderContainder data-test="header">
      <Link to="/"><p>Trackit</p></Link>
      <img src={user.image} alt="usuario" />
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
  z-index: 1;
  img {
    width: 51px;
    height: 51px;
    border-radius: 50%;
  }
`