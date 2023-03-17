import styled from "styled-components"
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { UserContext } from "../../contexts/UserContext";
import { BASE_URL } from "./../../constants/urls";
import { weekDays } from "./../../constants/mock";
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { IconePlus } from "../../components/IconePlus"

function DayCard({ name, daysNumbers, setDaysNumbers, index, loading, days, setDays, isSelected }) {
  const [selected, setSelected] = useState(isSelected)

  function chooseDay(index) {
    setSelected(!selected)
    for (let i = 0; i < daysNumbers.length; i++) {
      if (daysNumbers[i] === index + 1) {
        daysNumbers.splice(i, 1)
        days[index].selected = false
        setDays([...days])
        return setDaysNumbers([...daysNumbers])
      }
    }
    days[index].selected = true
    setDays([...days])
    setDaysNumbers([...daysNumbers, index + 1])
  }

  return (
    <DayContainer disabled={loading} onClick={() => chooseDay(index)} selected={selected}>{name}</DayContainer>
  )
}



export const HabitosPage = () => {
  const [habits, setHabits] = useState([])
  const [days, setDays] = useState(weekDays)
  const [name, setName] = useState("")
  const [creating, setCreating] = useState(false)
  const [daysNumbers, setDaysNumbers] = useState([])
  const { user } = useContext(UserContext)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getHabits()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [habits])

  function getHabits() {
    const config = {
      headers: {
        "Authorization": `Bearer ${user.token}`
      }
    }
    axios.get(`${BASE_URL}/habits`, config)
      .then(res => setHabits(res.data))
  }


  function createHabit() {
    setLoading(true)
    const habit = { name, days: daysNumbers.sort((a, b) => a - b) }
    const config = {
      headers: {
        "Authorization": `Bearer ${user.token}`
      }
    }
    axios.post(`${BASE_URL}/habits`, habit, config)
      .then(() => {
        setLoading(false)
        setCreating(false)
        setDays([...days.map(day => ({ name: day.name, selected: day.selected = false }))])
        setDaysNumbers([])
        setName("")
      })
      .catch(res => {
        alert(`Oops! algo deu errado...${res.response.data}`)
        setLoading(false)
      })
  }

  function deleteHabit(id) {
    const config = {
      headers: {
        "Authorization": `Bearer ${user.token}`
      }
    }
    if (window.confirm("Deseja deletar este habito ?")) {
      axios.delete(`${BASE_URL}/habits/${id}`, config)
    }
  }



  return (
    <>
      <Header />
      <PageContainer>
        <TextContainer>
          <h1>Meus hábitos</h1>
          <IconePlus onClick={() => setCreating(true)} />
        </TextContainer>
        {creating ? (
          <HabitCard disable={loading}>
            <input type="text" value={name} placeholder="nome do habito" disabled={loading}
              onChange={(e) => setName(e.target.value)} />
            <div>
              {days.map((day, i) => <DayCard key={i} name={day.name} daysNumbers={daysNumbers} days={days} isSelected={day.selected} setDays={setDays} setDaysNumbers={setDaysNumbers} index={i} loading={loading} />)}
            </div>
            <Buttons>
              <button onClick={() => setCreating(false)} disabled={loading}>Cancelar</button>
              <button onClick={createHabit} disabled={loading}>
                {loading ? <ThreeDots color="#FFF" height={50} width={50} /> : "Salvar"}
              </button>
            </Buttons>
          </HabitCard>
        ) : ""}
        {habits.length === 0 ? <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text> : (
          habits.map(habit => {
            let counter = 0
            return (
              <UserHabit key={habit.id}>
                <div>
                  <h1>{habit.name}</h1>
                  <div>
                    {weekDays.map((day, i) => {
                      let selected = false
                      if (habit.days[counter] === day.id) {
                        selected = true
                        counter++
                      }
                      return (
                        <DayContainer key={day.id} selected={selected}>{day.name}</DayContainer>
                      )
                    })}
                  </div>
                </div>
                <div onClick={() => deleteHabit(habit.id)}>
                  <ion-icon name="trash-outline"></ion-icon>
                </div>
              </UserHabit>
            )
          })
        )}
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
`
const Text = styled.div`
    font-size: 18px;
    color: #666666;
    text-align: start;
    margin-top: 30px;
    width: 340px;
`
const DayContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: ${({ selected }) => selected ? "#cfcfcf" : "#fff"};
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  font-size: 20px;
  color: ${({ selected }) => selected ? "#fff" : "#dbdbdb"};
  margin-right: 4px;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
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

const Buttons = styled.div`
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
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        background-color: #52B6FF;
    }
    button:hover {
        filter: brightness(0.9);
    }
`

const UserHabit = styled.div`
    display: flex;
    justify-content: space-between;
    width: 340px;
    min-height: 91px;
    margin-left: 17px;
    background-color: #fff;
    margin-bottom: 10px;
    box-sizing: border-box;
    padding: 15px;
    h1 {
        color: #666666;
        font-size: 20px;
        margin-bottom: 8px;
    }
    div > div {
        display: flex;
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
`

const HabitCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 340px;
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 18px;
    margin-left: 17px;
    box-sizing: border-box;
    div {
        display: flex;
    }
    input {
    box-sizing: border-box;
    width: 100%;
    height: 45px;
    background-color: ${({ disable }) => disable ? "#D4D4D4" : "#fff"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding-left: 11px;
    margin-bottom: 8px;
    font-size: 20px;
    color: ${({ disable }) => disable ? "#B3B3B3" : "#666666"};
    outline: none;
    }
    input::placeholder {
      color: #DBDBDB;
    }
`