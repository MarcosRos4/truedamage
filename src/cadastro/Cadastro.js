import './Cadastro.scss';
import faixagiants from "../images/faixa giants.png"
import muitosekkos from "../images/muitos ekkos.png"
import useToken from '../login/useToken.js';
import Login from '../login/Login.js';

export default function Cadastro(){

	const {token, setToken} = useToken()

    if(!token) {
        return <Login setToken={setToken} />
      }

	return(
		<div className="Cadastro">
			<img src={faixagiants} class="faixa-giants" alt="Faixa Giants"></img>
   			<img src={faixagiants} class="faixa-giants2" alt="Faixa Giants"></img>
			<img src={muitosekkos} class="muitos-ekko" alt="muitos-ekko"></img>
   			<div class="group-10">
				<form class="formulario">
					<label>Cadastro de Evento</label>
					<input type="text" placeholder="  Nome do Evento" required="true"></input>
					<input type="text" placeholder="  Nome da Casa" required="true"></input>
					<input type="text" placeholder="  Endereço" required="true"></input>
					<input type="text" placeholder="  CEP" required="true"></input>
					<input type="text" placeholder="  Capacidade Máxima" required="true"></input>
					<input type="text" placeholder="  Data" required="true"></input>
					<input type="text" placeholder="  Horário" required="true"></input>
					<div>
						<button type="submit"><a href="/consulta">Voltar</a></button>
						<input type="button" value="Limpar"></input>
						<input type="submit" value="Cadastrar"></input>
					</div>
				</form>
			</div>
		</div>
	);
}

