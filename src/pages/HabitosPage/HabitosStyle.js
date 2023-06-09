import styled from "styled-components"

export const HabitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 150px;
`
export const MyHabits = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 340px;
  margin: 92px 0 20px 17px;
  h1 {
    color: #126BA5;
    font-size: 23px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    border-radius: 5px;
    outline: none;
    border: none;
    color: #FFFFFF;
    font-size: 27px;
    cursor: pointer;
  }
  button:hover {
    filter: brightness(0.90);
  }
  span {
    height: 100%;
    margin-top: -7px;
  }
  @media screen and (max-width: 500px) {
    width: 90%;
  }
`
export const HabitCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 180px;
  background-color: #FFFFFF;
  border-radius: 5px;
  padding: 18px;
  margin-left: 17px;
  margin-bottom: 10px;
  box-sizing: border-box;
  div {
      display: flex;
  }
  input {
    background-color: ${({ disable }) => disable ? "#D4D4D4" : "#FFFFFF"};
    color: ${({ disable }) => disable ? "#B3B3B3" : "#666666"};
    width: 100%;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding-left: 11px;
    margin-bottom: 8px;
    font-size: 20px;
    outline: none;
  }
  input::placeholder {
    color: #DBDBDB;
  }
`
export const Day = styled.button`
  background-color: ${({ selected }) => selected ? "#cfcfcf" : "#FFFFFF"};
  color: ${({ selected }) => selected ? "#FFFFFF" : "#dbdbdb"};
  border: 1px solid #D5D5D5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  font-size: 20px;
  margin-right: 4px;
  ${({ readOnly }) => !readOnly ? (`
    cursor: pointer;
    &:hover {
      filter: brightness(0.9);
    }
  `
) : ""}
`
export const Buttons = styled.div`
  margin-top: 30px;
  align-self: flex-end;
  button {
    outline: none;
    border: none;
    width: 84px;
    height: 35px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  button:first-child {
    color: #52B6FF;
    background-color: transparent;
    margin-right: 15px;
  }
  button:last-child {
    color: #FFFFFF;
    background-color: #52B6FF;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button:hover {
    filter: brightness(0.9);
  }
`

export const Message = styled.div`
  color: #666666;
  font-size: 18px;
  margin: 30px 0 0 17px;
  width: 340px;
`

export const UserHabit = styled.div`
  background-color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  width: 340px;
  min-height: 91px;
  margin-left: 17px;
  margin-bottom: 10px;
  box-sizing: border-box;
  padding: 15px;
  h1 {
    color: #666666;
    font-size: 20px;
    margin-bottom: 8px;
    width: 240px;
    word-wrap: break-word;
  }
  div > div {
    display: flex;
    flex-wrap: wrap;
  }
  div:last-child {
    color: #666666;
  }
  ion-icon {
    font-size: 18px;
    transition: all 200ms ease-in-out;
    cursor: pointer;
  }
  ion-icon:hover {
    transform: scale(1.4);
  }
  @media screen and (max-width: 500px) {
    width: 90%;
  }
`