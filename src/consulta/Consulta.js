import { Link } from "react-router-dom"
import './Consulta.scss'

export default function Consulta(){
    return(
    <div className="Consulta">
    <nav>
        <Link to='/cadastro'>Cadastro</Link>
        <Link to='/'>Inicio</Link>
    </nav>
    <img src="../../assets/imagens/akali bola.png" alt="akali bola"></img>
        <img src="../../assets/imagens/quiana bola.png" alt="`quiana bola"></img>
        <img src="../../assets/imagens/faixa giants.png" class="faixa-giants" alt="faixa giants"></img>
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
                    <button class="evento">Cadastrar Novo Evento</button>
                </div>
            </div>
        </div>
        <img src="../../assets/imagens/faixa giants.png" class="`faixa-giants2" alt="faixa giants"></img>
    </div>
    );
}
    