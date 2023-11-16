import React from "react";
import './EventoFull.scss'


export default class EventoFull extends React.Component{
    render(){
        const {data, local, nome, horario, endereco, cep} = this.props
        return(
            <div className="Evento">
                <h3>{nome}</h3>
                <h3>{data}</h3>
                <h3>{horario}</h3>
                <h3>{endereco}</h3>
                <h3>{cep}</h3>
                <h3>{local}</h3>
                <a href='/consulta'>
                    <button>Editar</button>
                </a>
                <a href='/consulta'>
                    <button>Excluir</button>
                </a>
            </div>
        )
    }
}