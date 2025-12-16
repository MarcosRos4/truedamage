import './Login.scss'
import faixagiants from "../images/faixa giants.png"
import truedamagelogo from "../images/true damage logo.png"
import truedamagegravacao from "../images/true damage gavacao.jpg"
import truedamagegravacaotablet from "../images/true damage gavacao tablet.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { supabase } from '../Conection.js'
import useAuth from './useAuth.js'

import React, {useState} from 'react'


export default function Login(){
    
    const [handle, setHandle] = useState()
    const [senha, setSenha] = useState()
    const {setToken} = useAuth()
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
                    
            let { data: users} = await supabase
            .from('users')
            .select('*')
            .eq("handle", handle)
            
            if (!users || users.length === 0) {
                alert("Cadastro Não Encontrado")
            }
            else if (senha !== users[0].password) {
                alert("Informacoes Incorretas");
            }
            else {
                alert("Bem Vindo!");
                setToken("token-de-login")
                window.location.href = "/truedamage/consulta"
            }
        }
        
        catch (error) {
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
                        <input onChange={e => setHandle(e.target.value)} type="text" placeholder="Usuário" required></input>
                        <input onChange={e => setSenha(e.target.value)} type="password" name="senha" id="senha-input" placeholder="Senha" required></input>
                        <button type="submit">
                            <FontAwesomeIcon icon={faArrowRight} size="xl">
                            </FontAwesomeIcon>
                        </button>
                    </form>
                    <a className='cadastro' href='/truedamage/cadastro'><button>Ainda não tem conta?Cadastre-se!</button></a>
                <img className="giants2" src={faixagiants} alt="Faixa Giants"></img>
            </div>
        </div>
    );
}