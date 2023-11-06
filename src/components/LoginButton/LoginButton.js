import React, { useState } from "react";
import PropTypes from "prop-types"
import './LoginButton.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


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

export default function LoginButton ({ setToken }){

  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      senha
    });
    setToken(token);
  }
  
  return(
      <div className="LoginButton">
        <form onSubmit={handleSubmit}>
          <input onChange={e => setEmail(e.target.value)} type="text" placeholder="Usuário"></input>
          <input onChange={e => setSenha(e.target.value)} type="password" name="senha" id="senha-input" placeholder="Senha"></input>
          <button type="submit">
              ENTRAR
              <FontAwesomeIcon icon={faArrowRight} size="xl">
              </FontAwesomeIcon>
          </button>
        </form>
      </div>
  )
    
}

LoginButton.propTypes= { setToken: PropTypes.func.isRequired }