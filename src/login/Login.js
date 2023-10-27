
import './Login.scss'
import faixagiants from "../images/faixa giants.png"
import truedamagelogo from "../images/true damage logo.png"
import truedamagegravacao from "../images/true damage gavacao.jpg"


export default function Login(){
    return(
        <div className="Login">        
            <img src={truedamagegravacao} alt="Gravação True Damage"></img>
            <div class="form-div">
                <img class="giants1" src={faixagiants} alt="Faixa Giants"></img>
                <form class="form" action="">
                    <img class="logo" src={truedamagelogo} alt="True Damage Logo"></img>
                    <input class="dados" type="text" placeholder="Usuário"></input>
                    <input class="dados" type="password" name="senha" id="senha-input" placeholder="Senha"></input>
                    <div class="continue-div">
                        <button class="enter" type="submit"><a href='/consulta'>ENTRAR</a></button>
                        <span class="icon-wrapper">
                            <i class="fa-solid fa-arrow-right-long fa-2xl"></i>
                        </span>
                        <div>Admin Center</div>
                    </div>
                </form>
                <img class="giants2" src={faixagiants} alt="Faixa Giants"></img>
            </div>
        </div>
    );
}
