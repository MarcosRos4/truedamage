import './Landing.scss';
import truedamagelogo from "../images/true damage logo.png";
import bandatruedamageescada from "../images/banda true damage escada.png"
import giantslogo from "../images/giants logo.png";
import ekkocartoon from "../images/ekko-cartoon.png"
import quarteto from "../images/quarteto.jpg"
import ConfiraAgendaBtn from '../components/ConfereButton/ConfiraAgendaBtn.js';
import EventoShort from '../components/EventoShort/EventoShort.js';
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
        <div class="logo-div-header">
            <img src={truedamagelogo} alt="true damage logo"></img>
        </div>
        <div class="links-div-header">
            <a onClick={() => scrollToBottom('faixa2')} class="shows-link">SHOWS</a>
            <a onClick={() => scrollToBottom('socials')} class="contatos-link">CONTATOS</a>
            <a className='login-a' href='/login'><button>LOGIN</button></a>
        </div>
    </header>
    <div class="faixa1">
        <picture>
            <source media="(max-width:414px)" srcset={ekkocartoon}></source>
            <source media="(max-width:820px)"  srcset={quarteto}></source>
            <img src={bandatruedamageescada} alt="banda true damage"></img>
        </picture>
        <div class="centro">
            <div class="logo-centro-faixa1">
                <img class="true-damage-logo-centro" src={truedamagelogo} alt="true damage logo"></img>
                <img class="giants-logo-centro" src={giantslogo} alt="giants logo"></img>
            </div>
            <ConfiraAgendaBtn targetElementId='faixa2'></ConfiraAgendaBtn>
        </div>
    </div>
    <div class="faixa2" id='faixa2'>
        <div class="logo-faixa2">
            <img src={giantslogo} alt="logo giants"></img>
            <h2>VENDAS ABERTAS</h2>
        </div>
        <div class="tabdiv-faixa2">
            <table dados={dados} class="tabela-tabdiv-faixa2">
                <tbody>
                    {dados.map((item) => (
                        <EventoShort nome={item.nome} horario={item.horario} data={item.data} local={item.espaco}></EventoShort>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    <footer>
        <div class="socials-footer" id='socials'>
            <div class="socials-div">
                <a href="/"><FontAwesomeIcon icon={faInstagram} size='2x'></FontAwesomeIcon> @TRUEDAMAGE</a>
                <a href="/"><FontAwesomeIcon icon={faTwitterSquare} size='2x'></FontAwesomeIcon> @TRUEDAMAGE</a>
                <a href="/"><FontAwesomeIcon icon={faTiktok} size='2x'></FontAwesomeIcon> @TRUEDAMAGE</a>
                <a href="/"><FontAwesomeIcon icon={faYoutube} size='2x'></FontAwesomeIcon>  @TRUEDAMAGE</a>
            </div>
            <div class="contato-div">
                <h5>Contato Profissional: </h5>
                <a href="/">contato@truedamagebanda.com</a>
            </div>
        </div>
        <div class="trademark-footer">
            <h6><FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> 2023 True Damage</h6>
        </div>
    </footer>
    </div>
  )
}