import { Link } from "react-router-dom";
import './Cadastro.scss'

export default function Cadastro(){
	return(
		<div className="Cadastro">
			<nav>
				<Link to='/'>Inicio</Link>
				<Link to='/consulta'></Link>
			</nav>
			<img src="../../public/assets/imagens/faixa giants.png" class="faixa-giants" alt="Faixa Giants"></img>
   			<img src="../../public/assets/imagens/faixa giants.png" class="faixa-giants2" alt="Faixa Giants"></img>
			<img src="../../public/assets/imagens/muitos ekkos.png" class="muitos-ekko" alt="muitos-ekko"></img>
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
						<input type="button" value="Voltar"></input>
						<input type="button" value="Limpar"></input>
						<input type="submit" value="Cadastrar"></input>
					</div>
				</form>
			</div>
		</div>
	);
}

