import { Link } from 'react-router-dom';
import './Landing.scss';
import truedamagelogo from "../images/true damage logo.png";
import bandatruedamageescada from "../images/banda true damage escada.png"
import giantslogo from "../images/giants logo.png";
import ekkocartoon from "../images/ekko-cartoon.png"
import quarteto from "../images/quarteto.jpg"


export default function Landing() {
  
  return (
    <div className="Landing">
          <header>
        <div class="logo-div-header">
            <img src={truedamagelogo} alt="true damage logo"></img>
        </div>
        <div class="links-div-header">
            <a href="" class="shows-link">SHOWS</a>
            <a href="" class="contatos-link">CONTATOS</a>
            <input type="button" value="LOGIN"></input>
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
            <input class="botao-centro-faixa1" type="button" value="CONFIRA NOSSA AGENDA"></input>
            <i class="fa-solid fa-chevron-down fa-xl"></i>
            
        </div>
    </div>
    <div class="faixa2">
        <div class="logo-faixa2">
            <img src={giantslogo} alt="logo giants"></img>
            <h2>VENDAS ABERTAS</h2>
        </div>
        <div class="tabdiv-faixa2">
            <table class="tabela-tabdiv-faixa2">
                <tbody>
                    <tr>
                        <td>06/10</td>
                        <td>Espaco Unimed</td>
                        <td><input type="button" value="INGRESSOS"></input></td>
                    </tr>
                    <tr>
                        <td>13/10</td>
                        <td>Villa Country</td>
                        <td><input type="button" value="INGRESSOS"></input></td>
                    </tr>
                    <tr>
                        <td>14/10</td>
                        <td>Memorial da América Latina</td>
                        <td><input type="button" value="INGRESSOS"></input></td>
                    </tr>
                    <tr>
                        <td>15/10</td>
                        <td>Estádio Beira-Rio</td>
                        <td><input type="button" value="INGRESSOS"></input></td>
                    </tr>
                    <tr>
                        <td>17/10</td>
                        <td>Sea Club Ilhabela</td>
                        <td><input type="button" value="INGRESSOS"></input></td>
                    </tr>
                    <tr>
                        <td>19/10</td>
                        <td>Pier Mauá</td>
                        <td><input type="button" value="INGRESSOS"></input></td>
                    </tr>
                    <tr>
                        <td>20/10</td>
                        <td>Quintal do Espeto Interlagos</td>
                        <td><input type="button" value="INGRESSOS"></input></td>
                    </tr>
                    <tr>
                        <td>23/10</td>
                        <td>Audio</td>
                        <td><input type="button" value="INGRESSOS"></input></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <footer>
        <div class="socials-footer">
            <div class="socials-div">
                
                <a href=""><i class="fa-brands fa-instagram fa-2xl"></i> @TRUEDAMAGE</a>
                
                <a href=""><i class="fa-brands fa-square-x-twitter fa-2xl"></i> @TRUEDAMAGE</a>
                
                <a href=""><i class="fa-brands fa-tiktok fa-2xl"></i> @TRUEDAMAGE</a>
                
                <a href=""><i class="fa-brands fa-youtube fa-2xl"></i>  @TRUEDAMAGE</a>
            </div>
            <div class="contato-div">
                <h5>Contato Profissional: </h5>
                <a href="">contato@truedamagebanda.com</a>
            </div>
        </div>
        <div class="trademark-footer">
            <h6><i class="fa-regular fa-copyright fa-lg"></i> 2023 True Damage</h6>
        </div>
    </footer>
    </div>
  );

}

