import axios from "axios";
import { useContext, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import ProgressContext from "../../contexts/ProgressContext";
import UserContext from "../../contexts/UserContext";
import { BASE_URL, config } from "../../constants/data";
import { FooterContainer, ProgressBar } from "./FooterStyle";

export const Footer = () => {
  const { progress, getProgress } = useContext(ProgressContext)
  const { user } = useContext(UserContext)

  useEffect(() => {
    getTodayHabits()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function getTodayHabits() {
    const promise = axios.get(`${BASE_URL}/habits/today`, config(user))
    promise.then(res => getProgress(res.data))
  }

  return (
    <FooterContainer data-test="menu">
      <Link data-test="habit-link" to="/habitos" style={{ textDecoration: "none" }}>
        <h2>Hábitos</h2>
      </Link>
      <Link data-test="today-link" to="/hoje" style={{ textDecoration: "none" }}>
        <ProgressBar>
          <CircularProgressbar backgroundPadding={6} strokeWidth={9} value={progress} text="Hoje" background />
        </ProgressBar>
      </Link>
      <Link data-test="history-link" to="historico" style={{ textDecoration: "none" }}>
        <h2>Histórico</h2>
      </Link>
    </FooterContainer>
  )
}