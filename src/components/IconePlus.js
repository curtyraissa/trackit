import styled from "styled-components"

export const IconePlus = () => {
  return (
    <Icone data-test="habit-create-btn">+</Icone>
  )
}

const Icone = styled.button`
  height: 35px;
  width: 40px;
  background-color: #52B6FF;
  color: #ffffff;
  font-size: 28px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`