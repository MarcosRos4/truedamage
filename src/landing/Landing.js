import { Link } from 'react-router-dom';
import './Landing.scss';

export default function Landing() {
  
  return (
    <div className="Landing">
      <h1>ESSA É A LANDING PAGE</h1>
      <nav>
        <Link to='/cadastro'>Cadastro</Link>
        <Link to='/consulta'>Consulta</Link>
        <Link to='/login'>Login</Link>
      </nav>
          <header>
        <div class="logo-div-header">
            <img src="../../assets/imagens/true damage logo.png" alt="true damage logo"></img>
        </div>
        <div class="links-div-header">
            <a href="" class="shows-link">SHOWS</a>
            <a href="" class="contatos-link">CONTATOS</a>
            <input type="button" value="LOGIN"></input>
        </div>
    </header>
    <div class="faixa1">
        <picture>
            <source media="(max-width:414px)" srcset="../../assets/imagens/ekko-cartoon.png"></source>
            <source media="(max-width:820px)"  srcset="../../assets/imagens/quarteto.jpg"></source>
            <img src="../../assets/imagens/banda true damage escada.png" alt="banda true damage"></img>
        </picture>
        <div class="centro">
            <div class="logo-centro-faixa1">
                <img class="true-damage-logo-centro" src="../../assets/imagens/true damage logo.png" alt="true damage logo"></img>
                <img class="giants-logo-centro" src="../../assets/imagens/giants logo.png" alt="giants logo"></img>
            </div>
            <input class="botao-centro-faixa1" type="button" value="CONFIRA NOSSA AGENDA"></input>
            <i class="fa-solid fa-chevron-down fa-xl"></i>
            
        </div>
    </div>
    <div class="faixa2">
        <div class="logo-faixa2">
            <img src="../../assets/imagens/giants logo.png" alt="logo giants"></img>
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
                <h5>Contato Proficional: </h5>
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

