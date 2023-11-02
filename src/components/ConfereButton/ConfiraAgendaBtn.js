import React from 'react'
import './ConfiraAgendaBtn.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


function scrollToBottom(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });    
        }
        return true
}

export default class ConfiraAgendaBtn extends React.Component {
  render() {
    const {targetElementId} = this.props
        return (
            <div className='ConfiraDiv'>
                <button className='LoginButton' onClick={()=>scrollToBottom(targetElementId)}>
                CONFIRA NOSSA AGENDA
                <FontAwesomeIcon className='seta' icon={faChevronDown} size='xl'>
                </FontAwesomeIcon>
                </button>

            </div>
            
        );
    }
}