import React from "react";
import './LoginButton.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default class LoginButton extends React.Component{

    constructor(props) {
    super(props);
    this.state = {
      userId: '',
      validationMessage: '',
    };
  }

  handleUserIdChange = (e) => {
    this.setState({ userId: e.target.value });
  }

  validateUser = () => {
    const { userId } = this.state;
    if (userId) {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Usuário não encontrado');
          }
        })
        .then(user => {
          this.setState({ validationMessage: `Usuário encontrado: ${user.name}` });
        })
        .catch(error => {
          this.setState({ validationMessage: error.message });
        });
    } else {
      this.setState({ validationMessage: 'Informe um ID de usuário válido.' });
    }
  }


    render(){
        return(
            <div className="LoginButton">
                <input type="text" placeholder="Usuário"></input>
                <input type="password" name="senha" id="senha-input" placeholder="Senha"></input>
                <button onClick={this.validateUser}>
                    ENTRAR
                    <FontAwesomeIcon icon={faArrowRight} size="xl">
                    </FontAwesomeIcon>
                </button>
            </div>
        )
    }
}