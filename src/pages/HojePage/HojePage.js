import axios from "axios"
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ThreeDots } from "react-loader-spinner"
import ProgressContext from "../../contexts/ProgressContext"
import { BASE_URL, config } from "../../constants/data";
import UserContext from "../../contexts/UserContext"
import { HojeContainer, TrackCard } from "./HojeStyle"
import check from "../../assets/check.png"

function Track({ habit, sequence, record, done, markHabit }) {
  const [disable, setDisable] = useState(false)

  return (
    <TrackCard done={done} equals={sequence === record}>
      <div>
        <h2 data-test="today-habit-name">{habit}</h2>
        <p data-test="today-habit-sequence">Sequência atual: <span>{sequence} dias</span></p>
        <p data-test="today-habit-record">Seu recorde: <span className="record">{record} dias</span></p>
      </div>
      <button data-test="today-habit-check-btn"
        onClick={() => {
          setDisable(true)
          markHabit(setDisable)
        }}
        disabled={disable}>
        <img data-test="today-habit-check-btn" src={check} alt="check" />
      </button>
    </TrackCard>
  )
}

export const HojePage = () => {
  const [todayHabits, setTodayHabits] = useState([])
  const [loading, setLoading] = useState(true)
  const { user } = useContext(UserContext)
  const { progress, updateProgress } = useContext(ProgressContext)
  const navigate = useNavigate()
  dayjs.locale('pt-br');
  const lib = dayjs();
  const weekdDayFormat = lib.format('dddd')
  const dayMonthFormat = lib.format('DD/MM')

  useEffect(() => {
    axios.get(`${BASE_URL}/habits/today`, config(user))
      .then(res => { setTodayHabits(res.data); setLoading(false) })
      .catch(err => console.log(err.response.data.message))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function unCheckOrCheckHabit(id, done, setDisable, index) {
    todayHabits[index].done = !todayHabits[index].done
    done ? todayHabits[index].currentSequence -= 1 : todayHabits[index].currentSequence += 1
    done ? todayHabits[index].highestSequence -= 1 : todayHabits[index].highestSequence += 1
    done ? updateProgress(true) : updateProgress(true, true)
    setTodayHabits([...todayHabits])
    const isDone = done ? "uncheck" : "check"
    axios.post(`${BASE_URL}/habits/${id}/${isDone}`, {}, config(user))
      .then(() => { setDisable(false); })
      .catch(err => { alert(`Oops! algo deu errado...${err.response.data.message}`); navigate("/"); })
  }

  return (
    <HojeContainer>
      <h1 data-test="today">{weekdDayFormat}, {dayMonthFormat}</h1>
      {loading ? <ThreeDots color="#126BA5" height={50} width={50} /> : ""}
      {!loading ? progress === 0 || todayHabits.length === 0 ? <h3 data-test="today-counter">Nenhum hábito concluído ainda</h3> : <h3 data-test="today-counter" className="progress">{progress}% dos hábitos concluidos </h3> : ""}
      {!loading ? todayHabits.length === 0 ? <p data-test="today-counter">Nenhum habito para este dia...</p> : (
        <div data-test="today-habit-container">
          {todayHabits.map((today, i) =>
            <Track
              data-test="today-habit-check-btn"
              key={today.id}
              habit={today.name}
              sequence={today.currentSequence}
              record={today.highestSequence}
              done={today.done}
              markHabit={(setDisable) => unCheckOrCheckHabit(today.id, today.done, setDisable, i)} />)}
        </div>
      ) : ""}
    </HojeContainer>
  )
}