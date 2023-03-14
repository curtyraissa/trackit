import styled from "styled-components"

export const Header = () => {
  return (
    <HeaderContainder>
      <span>trackIt</span>
      <span>avatar</span>
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
`