
import './Login.scss'
import faixagiants from "../images/faixa giants.png"
import truedamagelogo from "../images/true damage logo.png"
import truedamagegravacao from "../images/true damage gavacao.jpg"
import truedamagegravacaotablet from "../images/true damage gavacao tablet.png"
import LoginButton from '../components/LoginButton/LoginButton.js'

export default function Login(){
    return(
        <div className="Login">   
            
            <img src={truedamagegravacaotablet} alt="tablet" className='imgtablet'></img>
            <img src={truedamagegravacao} alt="banda true damage" className='imgdesktop'></img>
            
            
            <div class="form-div">
                <img class="giants1" src={faixagiants} alt="Faixa Giants"></img>
                <form class="form" action="">
                    <img class="logo" src={truedamagelogo} alt="True Damage Logo"></img>
                    
                    <LoginButton></LoginButton>
                </form>
                <img class="giants2" src={faixagiants} alt="Faixa Giants"></img>
            </div>
        </div>
    );
}
