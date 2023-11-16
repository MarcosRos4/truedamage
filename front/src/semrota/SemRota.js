import { Link } from "react-router-dom";
import './SemRota.scss'

export default function SemRota(){
    return(
        <div className="SemRora">
            <h1>ROTA NÃO DEFINIDA, VOLTE AO INICIO: </h1>
            <Link to='/'>INICIO</Link>
        </div>
    );
}