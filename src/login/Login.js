import './Login.scss'
import faixagiants from "../images/faixa giants.png"
import truedamagelogo from "../images/true damage logo.png"
import truedamagegravacao from "../images/true damage gavacao.jpg"
import truedamagegravacaotablet from "../images/true damage gavacao tablet.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types"
import React, {useState} from 'react'


export default function Login({setToken}){
    
    const [email, setEmail] = useState("email")
    const [senha, setSenha] = useState("senha")

    async function loginUser(credentials) {
        return fetch('http://localhost:2319/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'

          },
          body: JSON.stringify(credentials)
        })
          .then(data => data.json())
       }

    async function autenticador(credentials) {
        return fetch(`http://localhost:2319/usuarios/buscarpemail/${credentials}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
        .then((resp) => resp.json())
        .then((data) => {
            return data       
        })
        .catch((err)=> {

            console.log(err.message())})
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const autenticacao = await autenticador(email);

        const token = await loginUser({email, senha})

        if (!autenticacao[0]) {
            alert("Cadastro Não Encontrado")
        }
        else if (email===autenticacao[0].emailusuarios && senha===autenticacao[0].senha) {
            alert("Bem Vindo!")
            setToken(token)
        }
        else{
            alert("Informacoes Incorretas")
        }
        
    }
    return(
        <div className="Login">   
            
            <img src={truedamagegravacaotablet} alt="tablet" className='imgtablet'></img>
            <img src={truedamagegravacao} alt="banda true damage" className='imgdesktop'></img>
            
            
            <div class="form-div">
                <img class="giants1" src={faixagiants} alt="Faixa Giants"></img>
                    <img class="logo" src={truedamagelogo} alt="True Damage Logo"></img>
                    <form onSubmit={handleSubmit}>
                        <input onChange={e => setEmail(e.target.value)} type="text" placeholder="Usuário"></input>
                        <input onChange={e => setSenha(e.target.value)} type="password" name="senha" id="senha-input" placeholder="Senha"></input>
                        <button type="submit">
                            ENTRAR
                            <FontAwesomeIcon icon={faArrowRight} size="xl">
                            </FontAwesomeIcon>
                        </button>
                    </form>
                <img class="giants2" src={faixagiants} alt="Faixa Giants"></img>
            </div>
        </div>
    );
}

Login.propTypes = {setToken: PropTypes.func.isRequired}