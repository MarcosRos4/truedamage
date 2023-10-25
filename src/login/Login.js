import { Link } from "react-router-dom"
import './Login.scss'
import faixagiants from "../images/faixa giants.png"
import truedamagelogo from "../images/true damage logo.png"
import truedamagegravacao from "../images/true damage gavacao.jpg"


export default function Login(){
    return(
        <div className="Login">        
            <img src={truedamagegravacao} alt="Gravação True Damage"></img>
            <div class="form-div">
                <img class="giants" src={faixagiants} alt="Faixa Giants"></img>
                <img class="logo" src={truedamagelogo} alt="True Damage Logo"></img>
                <form class="form" action="">
                    <input class="dados" type="text" placeholder="Usuário"></input>
                    <input class="dados" type="password" name="senha" id="senha-input" placeholder="Senha"></input>
                    <div class="continue-div">
                        <input class="enter" type="button"></input>
                        <span class="icon-wrapper">
                            <i class="fa-solid fa-arrow-right-long fa-2xl"></i>
                        </span>
                        <h4>Admin Center</h4>
                    </div>
                </form>
                <img class="giants" src={faixagiants} alt="Faixa Giants"></img>
            </div>
        </div>
    );
}
