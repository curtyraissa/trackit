import axios from "axios";
import dayjs from "dayjs"
import { useContext, useEffect, useState } from "react";
import { Buttons, Day, HabitCard, Message, MyHabits, UserHabit, HabitsContainer } from "./HabitosStyle";
import { BASE_URL, weekDays, config } from "../../constants/data";
import UserContext from "../../contexts/UserContext";
import ProgressContext from "../../contexts/ProgressContext";
import { ThreeDots } from "react-loader-spinner";
import { DayCard } from "../../components/DayCard/DayCard"
import { createHabit } from "../../services/createHabit";

export const HabitosPage = () => {
  const [habits, setHabits] = useState([])
  const [days, setDays] = useState(weekDays)
  const [name, setName] = useState("")
  const [creating, setCreating] = useState(false)
  const [daysNumbers, setDaysNumbers] = useState([])
  const { user } = useContext(UserContext)
  const { updateProgress, decrementProgress } = useContext(ProgressContext)
  const [loading, setLoading] = useState(false)
  const [initialLoading, setInitialLoading] = useState(true)

  useEffect(() => {
    getHabits()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getHabits = () => axios.get(`${BASE_URL}/habits`, config(user)).then(res => { setHabits(res.data); setInitialLoading(false); })

  function deleteHabit(id, habitDelete) {
    if (window.confirm("Deseja deletar este habito ?")) {
      axios.delete(`${BASE_URL}/habits/${id}`, config(user)).then(() => {
        const haveToday = habitDelete.days.find(day => day === dayjs().day())
        if (haveToday !== undefined) decrementProgress()
        habits.splice(habits.indexOf(habitDelete), 1)
        setHabits([...habits])
      })
    }
  }

  return (
    <HabitsContainer>
      <MyHabits>
        <h1>Meus hábitos</h1>
        <button data-test="habit-create-btn" onClick={() => setCreating(true)}><span>+</span></button>
      </MyHabits>
      {creating ? (
        <HabitCard data-test="habit-create-container" disable={loading}>
          <input data-test="habit-name-input" type="text" value={name} placeholder="nome do habito" disabled={loading} onChange={(e) => setName(e.target.value)} />
          <div>
            {days.map((day, i) => {
              return (
                <DayCard data-test="habit-day" key={i} name={day.name} index={i} days={days} daysNumbers={daysNumbers}
                  isSelected={day.selected} loading={loading} setDays={setDays} setDaysNumbers={setDaysNumbers} />
              )
            })}
          </div>
          <Buttons>
            <button data-test="habit-create-cancel-btn" onClick={() => setCreating(false)} disabled={loading}>Cancelar</button>
            <button data-test="habit-create-save-btn" onClick={() => createHabit(
              name, days, habits, updateProgress, user, daysNumbers,
              setLoading, config, setDays, setDaysNumbers, setName, setCreating, setHabits
            )} disabled={loading}>
              {loading ? <ThreeDots color="#FFFFFF" height={50} width={50} /> : "Salvar"}
            </button>
          </Buttons>
        </HabitCard>
      ) : ""}
      {initialLoading ? <ThreeDots color="#126BA5" height={50} width={50} wrapperStyle={{ marginLeft: "17px" }} /> : habits.length === 0 ?
        <Message>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Message> : (
          habits.sort((a, b) => a.id - b.id).map(habit => {
            let counter = 0
            return (
              <UserHabit key={habit.id}>
                <div>
                  <h1>{habit.name}</h1>
                  <div>
                    {weekDays.map(day => {
                      let selected = false
                      if (habit.days[counter] === day.id) {
                        selected = true
                        counter++
                      }
                      return <Day key={day.id} selected={selected} readOnly>{day.name}</Day>
                    })}
                  </div>
                </div>
                <div onClick={() => deleteHabit(habit.id, habit)}><ion-icon name="trash-outline"></ion-icon></div>
              </UserHabit>
            )
          })
        )}
    </HabitsContainer>
  )
}