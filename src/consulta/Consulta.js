import './Consulta.scss'
import quianabola from "../images/quiana bola.png";
import faixagiants from "../images/faixa giants.png"
import akalibola from "../images/akali bola.png";
import useAuth from '../login/useAuth.js';
import Login from '../login/Login.js';
import EventoFull from '../components/EventoFull/EventoFull.js';

export default function Consulta(){

    const {token, setToken} = useAuth()

    if(!token) {
        return <Login setToken={setToken} />
      }
    
    return(
    <div className="Consulta">
    <img src={akalibola} class="akali" alt="akali bola"></img>
    <img src={quianabola} class="quiana" alt="`quiana bola"></img>
    <img src={faixagiants} class="faixa-giants" alt="faixa giants"></img>
        <div name="`wrapper">
            <div class="menu">
                <div class="pesquisa">
                    Procurar Evento
                </div>
                <div class="filtro">
                    <span>Data</span> 
                    <span>Casa</span>
                    <span>Estado</span>
                </div>
                <div class="tabela-eventos-div">
                    <table class="tabela-eventos">
                        <thead>
                            <tr class="cabecalho">
                                <th>Evento</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><EventoFull
                                    nome="MArcos"
                                    data="09/11"
                                    horario="20:00"
                                    endereco="Avenida Paulista n 400"
                                    cep="02194775"
                                    local="Audio"

                                ></EventoFull></td>
                            </tr>
                            
                        </tbody>
                    </table>                    
                    <button class="evento"><a href="/cadastro">Cadastrar Novo Evento</a></button>
                    <button class="evento"><a href="/">SAIR</a></button>
                </div>
            </div>
        </div>
        <img src={faixagiants} class="faixa-giants2" alt="faixa giants"></img>
    </div>
    );
}
    