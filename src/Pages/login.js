import React, { Component } from 'react';
import Style from './login.module.css'

class Titulo extends Component {
    render() {
        return(
            <div>
                <div className={Style.Titulo}>
                    <h1>Trilha Tech</h1>
                    <p>Descubra seu potencial na tecnologia!</p>
                </div>
            </div>
            
        );
    }
}

class CamposLogin extends Component {
    render() {
        return(
        <div>
            <div className={Style.camposLogin}>
                <form action={"/logar"} method='POST'>
                    <label><b>E-mail:</b></label>

                    <input
                        type="email"
                        placeholder="Digite seu e-mail"
                    />

                    <label><b>Senha:</b></label>

                    <input
                        type="password"
                        placeholder="Digite sua senha"
                    />

                    <input class="submit" type="submit" value="Entrar"/>
                </form>
                <p className={Style.hyperlink}><a href="/cadastro">Cadastre-se</a></p>
            </div>
            
        </div>
        );
    }
}


class Login extends Component {
    render() {
        return(
            <div className={Style.container}>
                <div className={Style.Login}>
                
                    <Titulo />                  

                    <CamposLogin />

                </div>
            </div>
            
        );
    }
}


export default Login;