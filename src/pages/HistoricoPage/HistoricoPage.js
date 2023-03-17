import axios from "axios";
import dayjs from "dayjs"
import "react-calendar/dist/Calendar.css";
import "react-toastify/dist/ReactToastify.css";
import Calendar from "react-calendar";
import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { BASE_URL, config } from "../../constants/data";
import UserContext from "../../contexts/UserContext"
import { HistoricContainer } from "./HistoricoStyle";

export const HistoricoPage = () => {
  const [historic, setHistoric] = useState([])
  const { user } = useContext(UserContext)

  useEffect(() => {
    getHistoric()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [historic])

  function getHistoric() {
    const promise = axios.get(`${BASE_URL}/habits/history/daily`, config(user))
    promise.then(res => setHistoric(res.data))
  }

  function formatDate(date) {
    const formattedDate = dayjs(date).format("DD/MM/YYYY")
    const day = formattedDate.split("/")[0]
    for (let i = 0; i < historic.length; i++) {
      let counter = 0
      if (formattedDate === historic[i].day) {
        for (let j = 0; j < historic[i].habits.length; j++) {
          if (historic[i].habits[j].done) counter++
        }

        if (counter === historic[i].habits.length) {
          return <p className="green">{day}</p>
        } else {
          return <p className="red">{day}</p>
        }
      }
    }
    return day
  }

  function renderDayHabits(habits) {
    return habits.map(habit => {
      return (
        <p key={habit.id}>
          Hábito: {habit.name} - {habit.done ?
            <ion-icon style={{ color: "green" }} name="checkmark-outline"></ion-icon> :
            <ion-icon style={{ color: "red" }} name="close-outline"></ion-icon>
          }
        </p>
      )
    })
  }

  function showDayHabits(date) {
    const formattedDate = dayjs(date).format("DD/MM/YYYY")
    for (let i = 0; i < historic.length; i++) {
      if (formattedDate === historic[i].day) {
        toast(<div>{renderDayHabits(historic[i].habits)}</div>,
          {
            position: "top-center",
            autoClose: false,
            closeOnClick: true,
            draggable: true,
          });
      }
    }
  }

  return (
    <HistoricContainer>
      <h1>Histórico</h1>
      <Calendar data-test="calendar" className="calendar" locale="pt-BR" formatDay={(_, date) => formatDate(date)} onClickDay={(date) => showDayHabits(date)} />
      <ToastContainer />
    </HistoricContainer>
  )
}