import './Login.scss'
import faixagiants from "../images/faixa giants.png"
import truedamagelogo from "../images/true damage logo.png"
import truedamagegravacao from "../images/true damage gavacao.jpg"
import truedamagegravacaotablet from "../images/true damage gavacao tablet.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types"
import {autenticador, loginUser} from '../fetchs/userFetchs.js'

import React, {useState} from 'react'


export default function Login({setToken}){
    
    const [email, setEmail] = useState("email")
    const [senha, setSenha] = useState(Math.random())
    


    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const autenticacao = await autenticador(email);

        if (!autenticacao || autenticacao.length === 0) {
            alert("Cadastro Não Encontrado");
        } else {
            const token = await loginUser({ email, senha });

            if (email === autenticacao[0].emailusuarios && senha === autenticacao[0].senha) {
                alert("Bem Vindo!");
                setToken(token);
            } else {
                alert("Informacoes Incorretas");
            }
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
        alert("Erro ao processar a requisição. Por favor, tente novamente.");
    }
}
    return(
        <div className="Login">   
            
            <img src={truedamagegravacaotablet} alt="tablet" className='imgtablet'></img>
            <img src={truedamagegravacao} alt="banda true damage" className='imgdesktop'></img>
            
            
            <div className="form-div">
                <img className="giants1" src={faixagiants} alt="Faixa Giants"></img>
                    <img className="logo" src={truedamagelogo} alt="True Damage Logo"></img>
                    <form onSubmit={handleSubmit}>
                        <input onChange={e => setEmail(e.target.value)} type="text" placeholder="Usuário"></input>
                        <input onChange={e => setSenha(e.target.value)} type="password" name="senha" id="senha-input" placeholder="Senha"></input>
                        <button type="submit">
                            <FontAwesomeIcon icon={faArrowRight} size="xl">
                            </FontAwesomeIcon>
                        </button>
                    </form>
                <img className="giants2" src={faixagiants} alt="Faixa Giants"></img>
            </div>
        </div>
    );
}

Login.propTypes = {setToken: PropTypes.func.isRequired}