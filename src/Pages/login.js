import React, { Component } from 'react';
import './login.css';
import Andre from './../Assets/Andre.png';


class Titulo extends Component {
    render() {
        return(
            <div className="titulo">
                <h1>Trilha Tech</h1>
                <p>Descubra seu potencial na tecnologia!</p>
            </div>
        );
    }
}


class CamposLogin extends Component {
    render() {
        return(
            <>
            <div className="campos-login">

                <label>E-mail:</label>

                <input
                    type="email"
                    placeholder="Digite seu e-mail"
                />

                <label>Senha:</label>

                <input
                    type="password"
                    placeholder="Digite sua senha"
                />

                <button>Entrar</button>
                <p>Não possui conta? <a href="/cadastro">Cadastre-se</a></p>
            </div>
            
            </>
        );
    }
}


class Login extends Component {
    render() {
        return(
            <div className="login">

                <Titulo />

                <img
                    src={Andre}
                    className="personagem"
                    alt="Andre"
                />

                <CamposLogin />

            </div>
        );
    }
}


export default Login;