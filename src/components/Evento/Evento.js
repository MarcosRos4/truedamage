import React from "react";
import './Evento.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faHouse, faTicket } from "@fortawesome/free-solid-svg-icons";

export default class Evento extends React.Component{
    render(){
        const {data, local} = this.props
        return(
            <div className="Evento">
                <h3><FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon> {data}</h3>
                <h3><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon> {local}</h3>
                <a href='https://www.sp.senac.br'>
                <button><FontAwesomeIcon icon={faTicket}></FontAwesomeIcon> INGRESSOS</button></a>
            </div>
        )
    }
}