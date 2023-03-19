import styled from "styled-components"

export const HojeContainer = styled.div`
  margin: 98px 0 150px 17px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: #126BA5;
    font-size: 23px;
  }
  h3 {
    color: #BABABA;
    font-size: 18px;
    margin: 5px 0 28px;
  }
  .progress {
    color: #8FC549;
  }
`

export const TrackCard = styled.div`
  background-color: #FFFFFF;
  color: #666666;
  display: flex;
  justify-content: space-between;
  width: 340px;
  min-height: 94px;   
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 10px;
  h2 {
    font-size: 20px;
    margin-bottom: 8px;
    width: 240px;
    word-wrap: break-word;
  }
  p {
    font-size: 13px;
  }
  button {
    background-color: ${({ done }) => done ? "#8FC549" : "#E7E7E7"};
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    width: 69px;
    height: 69px;
    border-radius: 5px;
    cursor: pointer;
  }
  span {
    color: ${({ done }) => done ? "#8FC549" : "currentColor"};
  }
  .record {
    color: ${({ done, equals }) => done && equals ? "#8FC549" : "currentColor"}
  }
  @media screen and (max-width: 500px) {
    width: 95%;
  }
`