import styled from "styled-components"

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  img {
    width: 200px;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
  }
  input {
    background-color: ${({ disable }) => disable ? "#f2f2f2" : "#fff"};
    color: ${({ disable }) => disable ? "#afafaf" : "#dbdbdb"};
    width: 303px;
    height: 45px;
    outline: none;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
    padding-left: 11px;
    margin-bottom: 6px;
    box-sizing: border-box;
  }
  input::placeholder {
    color: #DBDBDB;
  }
  button {
    justify-content: center;
    display: flex;
    width: 303px;
    align-items: center;
    height: 45px;
    background-color: #52B6FF;
    border-radius: 5px;
    border: none;
    outline: none;
    color: #FFFFFF;
    font-size: 20px;
    cursor: pointer;
  }
  p {
    margin-top: 25px;
    color: #52B6FF;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
  }
  @media screen and (max-width: 350px) {
    input, button {
      width: 100%;
    }
  }
`