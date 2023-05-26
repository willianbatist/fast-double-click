import "./RegisterDatetime.css";
import Header from "../../components/header/Header";
import { postRegisterDatetime } from "../../services/services";
import { v4 as uuid } from 'uuid';
import { useState } from "react";


export default function RegisterDatetime() {
  const [count, setCount] = useState(0);
  const date = new Date().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"});

  
  setTimeout(() => {
    setCount(count + 1)
  }, 1000);

  const handleRegisterDatetime = async () => {
    await postRegisterDatetime({ id: uuid(), datetime: date})
  }

  return(
  <div className="containerRegisterDatetime">
    <Header/>
    <section>
      <div>
        <h2>{date}</h2>
        <button type="button" onClick={() => handleRegisterDatetime()}>Registrar</button>
      </div>
    </section>
  </div>
  )
}