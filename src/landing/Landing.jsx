import './Landing.scss';
import truedamagelogo from "../images/true damage logo.png";
import bandatruedamageescada from "../images/banda true damage escada.png"
import giantslogo from "../images/giants logo.png";
import ekkocartoon from "../images/ekko-cartoon.png"
import quarteto from "../images/quarteto.jpg"
import ConfiraAgendaBtn from '../components/ConfereButton/ConfiraAgendaBtn.jsx';
import EventoShort from '../components/EventoShort/EventoShort.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { supabase } from '../Conection.js';

function scrollToBottom(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });    
        }
        return true
}



export default function Landing() {

    const [dados, setDados] = useState([])
    
    // carrega os eventos do BD na constante através de um fetch
    const carregaEventos = async () => {
      try {
        
        let { data: events, error } = await supabase
        .from('events')
        .select('*')

        setDados(events)
      } catch (error) {
        alert(error.message)
      }
    }
    
    // chama a funcção carregaEventos ao iniciar a pagina
    useEffect(() => { carregaEventos() }, [])

    return (
    <div className="Landing">
          <header>
        <div className="logo-div-header">
            <img srcSet={truedamagelogo} alt="true damage logo"></img>
        </div>
        <div className="links-div-header">
            <a onClick={() => scrollToBottom('faixa2')} className="shows-link">SHOWS</a>
            <a onClick={() => scrollToBottom('socials')} className="contatos-link">CONTATOS</a>
            <a className='login-a' href='/truedamage/login'><button>LOGIN</button></a>
        </div>
    </header>
    <div className="faixa1">
        <picture>
            <source media="(max-width:414px)" srcSet={ekkocartoon}></source>
            <source media="(max-width:820px)"  srcSet={quarteto}></source>
            <img srcSet={bandatruedamageescada} alt="banda true damage"></img>
        </picture>
        <div className="centro">
            <div className="logo-centro-faixa1">
                <img className="true-damage-logo-centro" srcSet={truedamagelogo} alt="true damage logo"></img>
                <img className="giants-logo-centro" srcSet={giantslogo} alt="giants logo"></img>
            </div>
            <ConfiraAgendaBtn targetElementId='faixa2'></ConfiraAgendaBtn>
        </div>
    </div>
    <div className="faixa2" id='faixa2'>
        <div className="logo-faixa2">
            <img srcSet={giantslogo} alt="logo giants"></img>
            <h2>VENDAS ABERTAS</h2>
        </div>
        <div className="tabdiv-faixa2">
            <table dados={dados} className="tabela-tabdiv-faixa2">
                <tbody>
                    {dados.map((item) => (
                        <EventoShort nome={item.nome} horario={item.horario} data={item.data} local={item.local}></EventoShort>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    <footer>
        <div className="socials-footer" id='socials'>
            <div className="socials-div">
                <a target="_blank" rel="noopener noreferrer"  href="https://www.linkedin.com/in/marcos-rosa-575398210/"><FontAwesomeIcon icon={faInstagram} size='2x'></FontAwesomeIcon> @TRUEDAMAGE</a>
                <a target="_blank" rel="noopener noreferrer"  href="https://www.linkedin.com/in/marcos-rosa-575398210/"><FontAwesomeIcon icon={faTwitterSquare} size='2x'></FontAwesomeIcon> @TRUEDAMAGE</a>
                <a target="_blank" rel="noopener noreferrer"  href="https://www.linkedin.com/in/marcos-rosa-575398210/"><FontAwesomeIcon icon={faTiktok} size='2x'></FontAwesomeIcon> @TRUEDAMAGE</a>
                <a target="_blank" rel="noopener noreferrer"  href="https://www.linkedin.com/in/marcos-rosa-575398210/"><FontAwesomeIcon icon={faYoutube} size='2x'></FontAwesomeIcon>  @TRUEDAMAGE</a>
            </div>
            <div className="contato-div">
                <h5>Contato Profissional: </h5>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/marcos-rosa-575398210/">contato@truedamagebanda.com</a>
            </div>
        </div>
        <div className="trademark-footer">
            <h6><FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> 2023 True Damage</h6>
        </div>
    </footer>
    </div>
  )
}