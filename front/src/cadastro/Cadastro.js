import './Cadastro.scss';
import faixagiants from "../images/faixa giants.png"
import muitosekkos from "../images/muitos ekkos.png"
import useAuth from '../login/useAuth.js';
import { useState } from 'react';
import { cadastrarUser, loginUser } from '../fetchs/userFetchs.js';

export default function Cadastro(){
	const [usuario, setUsuario] = useState("")
	const [senha, setSenha] = useState(Math.random())
	const [confimsenha, setConfirmSenha] = useState(Math.random())
	const {token, setToken} = useAuth()

	const handleCadastro = async (e) => {
		e.preventDefault()
		if (senha === confimsenha) {
			try {
    			const response = cadastrarUser(usuario, senha)
				if ((await response).status === 200) {
					alert("Usuário Cadastrado com Sucesso!")

					const tokengerado = await loginUser({ usuario, senha });
                	alert("Bem Vindo!")
					setToken(tokengerado);                	

					window.location.href = '/consulta'
				} else {
					alert("Usuário já foi Cadastrado!")
				}
    			
    		}
			catch (error) {
      			console.error('Erro ao processar a chamada à API', error);
    		}
		}
		else{
			alert("A Senhas não correspondem")
		}
  	}

	
	return(
		<div className="Cadastro">
			<img src={faixagiants} className="faixa-giants" alt="Faixa Giants"></img>
   			<img src={faixagiants} className="faixa-giants2" alt="Faixa Giants"></img>
			<img src={muitosekkos} className="muitos-ekko" alt="muitos-ekko"></img>
   			<div className="group-10">
				<form className="formulario" onSubmit={handleCadastro}>
					<label>Cadastro de Admin</label>
					<input onChange={(e) => {setUsuario(e.target.value)}} type="text" placeholder="  Usuário" required={true}></input>
					<input onChange={(e) => {setSenha(e.target.value)}} type="password" placeholder="  Senha" required={true}></input>
					<input onChange={(e) => {setConfirmSenha(e.target.value)}} type="password" placeholder="  Confirme sua senha" required={true}></input>
					<input type="submit" value="Cadastrar"></input>

				</form>
			</div>
		</div>
	);
}

