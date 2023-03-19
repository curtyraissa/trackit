import axios from "axios"
import dayjs from "dayjs"
import { BASE_URL } from "../constants/data"

export const createHabit = (name, days, habits, updateProgress, user, daysNumbers, setLoading, config, setDays, setDaysNumbers, setName, setCreating, setHabits) => {
  setLoading(true)
  const habit = { name, days: daysNumbers.sort((a, b) => a - b) }
  axios.post(`${BASE_URL}/habits`, habit, config(user))
    .then((res) => {
      const haveToday = res.data.days.find(day => day === dayjs().day())
      const baseDays = days.map((day, i) => ({ id: i, name: day.name, selected: day.selected = false }))
      if (haveToday !== undefined) updateProgress()
      setLoading(false)
      setCreating(false)
      setDays([...baseDays])
      setDaysNumbers([])
      setName("")
      setHabits([...habits, res.data])
    })
    .catch(err => {
      alert(`Oops! algo deu errado...${err.response.data.message}`)
      setLoading(false)
    })
}