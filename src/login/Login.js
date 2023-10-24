import { Link } from "react-router-dom"
import './Login.scss'

export default function Login(){
    return(
        <div className="Login">
            <nav>
                <Link to='/'>Inicio</Link>
            </nav>
            <img src="../../assets/imagens/true damage gavacao.jpg" alt="Gravação True Damage"></img>
            <div class="form-div">
                <img class="giants" src="../../assets/imagens/faixa giants.png" alt="Faixa Giants"></img>
                <img class="logo" src="../../assets/imagens/true damage logo.png" alt="True Damage Logo"></img>
                <form class="form" action="">
                    <input type="text" placeholder="Usuário"></input>
                    <input type="password" name="senha" id="senha-input" placeholder="Senha"></input>
                    <div class="continue-div">
                        <input type="button"></input>
                        <span class="icon-wrapper">
                            <i class="fa-solid fa-arrow-right-long fa-2xl"></i>
                        </span>
                        <h4>Admin Center</h4>
                    </div>
                </form>
                <img class="giants" src="../../assets/imagens/faixa giants.png" alt="Faixa Giants"></img>
            </div>
        </div>
    );
}
