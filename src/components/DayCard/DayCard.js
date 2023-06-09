import { useState } from "react"
import { Day } from "../../pages/HabitosPage/HabitosStyle";

export const DayCard = ({ name, daysNumbers, setDaysNumbers, index, loading, days, setDays, isSelected }) => {
  const [selected, setSelected] = useState(isSelected)

  function chooseDay(index) {
    setSelected(!selected)
    for (let i = 0; i < daysNumbers.length; i++) {
      if (daysNumbers[i] === index) {
        daysNumbers.splice(i, 1)
        days[index].selected = false
        setDays([...days])
        return setDaysNumbers([...daysNumbers])
      }
    }
    days[index].selected = true
    setDays([...days])
    setDaysNumbers([...daysNumbers, index])
  }

  return (
    <Day data-test="habit-day" disabled={loading} onClick={() => chooseDay(index)} selected={selected}>{name}</Day>
  )
}