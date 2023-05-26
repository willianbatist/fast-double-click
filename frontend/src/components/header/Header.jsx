import "./header.css";
import { Link } from "react-router-dom";


export default function Header() {

  return(
    <header>
      <nav>
        <ul>
          <li><Link className="link" to="/RegisterDatetime">Registrar Tempo</Link></li>
          <li><Link className="link" to="/TimeLine">Histórico de registros</Link></li>
        </ul>
      </nav>
    </header>
  )
}