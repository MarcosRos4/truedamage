import { Link } from "react-router-dom"
import './Consulta.scss'
import quianabola from "../images/quiana bola.png";
import faixagiants from "../images/faixa giants.png"
import akalibola from "../images/akali bola.png";

export default function Consulta(){
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
                                <th>Data</th>
                                <th>Casa</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>06 /10 / 2023</td>
                                <td>Espaco Unimed</td>
                                <td>Sao Paulo</td>
                            </tr>
                            <tr>
                                <td>13 /10 / 2023</td>
                                <td>Villa Country</td>
                                <td>Sao Paulo</td>
                            </tr>
                            <tr>
                                <td>14 /10 / 2023</td>
                                <td>Memorial da América Latina</td>
                                <td>Sao Paulo</td>
                            </tr>
                            <tr>
                                <td>15 /10 / 2023</td>
                                <td>Estádio Beira-Rio</td>
                                <td>Sao Paulo</td>
                            </tr>
                            <tr>
                                <td>17 /10 / 2023</td>
                                <td>Sea Club Ilhabela</td>
                                <td>Sao Paulo</td>
                            </tr>
                            <tr>
                                <td>19 /10 / 2023</td>
                                <td>Pier Mauá</td>
                                <td>Sao Paulo</td>
                            </tr>
    
                            <tr>
                                <td>20 /10 / 2023</td>
                                <td>Quintal do Espeto Interlagos</td>
                                <td>Sao Paulo</td>
                            </tr>
                            <tr>
                                <td>23 /10 / 2023</td>
                                <td>Audio</td>
                                <td>Sao Paulo</td>
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
    