import './Cadastro.scss';
import faixagiants from "../images/faixa giants.png"
import muitosekkos from "../images/muitos ekkos.png"
import { useState } from 'react';
import { supabase } from '../Conection.js';
import useAuth from '../login/useAuth.js';


export default function Cadastro(){
	const [handle, setHandle] = useState("")
	const [password, setPassword] = useState(0)
	const [confirmPassword, setConfirmPassword] = useState(0)
	const {token, setToken} = useAuth()

	const handleCadastro = async (e) => {
		e.preventDefault()
		if (password === confirmPassword) {
			try {
    			
				let { data: users } = await supabase
				.from('users')
				.select("*").eq("handle", handle)
				
				if (users.length === 0) {
					alert("Usuário Cadastrado com Sucesso!")
					await supabase
					.from('users')
					.insert({ handle: handle, password: password })
					setToken("token-de-cadastro")
                	alert("Bem Vindo!")
         	

					window.location.href = '/truedamage/consulta'
				} else {
					alert("Usuário já foi Cadastrado!")
				}
    		}
			catch (error) {
				alert("Erro ao processar a chamada à API")
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
				<form className="formulario" onSubmit={handleCadastro}>
					<label>Cadastro de Admin</label>
					<input onChange={(e) => {setHandle(e.target.value)}} type="text" placeholder="  Usuário" required={true}></input>
					<input onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="  Senha" required={true}></input>
					<input onChange={(e) => {setConfirmPassword(e.target.value)}} type="password" placeholder="  Confirme sua senha" required={true}></input>
					<input type="submit" value="Cadastrar"></input>

				</form>
		</div>
	);
}

