import React from 'react';
import Style from './cadastro.module.css'

function Titulo(){
    
        return(
            <div className={Style.Titulo}>
                <h1>Trilha Tech</h1>
                <p>Descubra seu potencial na tecnologia!</p>
            </div>
        );
    
}
function CamposCadastro(){
    return(
        
    <div>
        <div className={Style.camposCadastro}>
            <form action="/cadastro" method="post" class="form-usuario">
                    <div className="form-group">

                        <label for="nome">Nome Completo:</label>
                        <input type="text" id="nome" name="nome" placeholder="Digite seu nome completo" required/>
                        

                        <label for="e-mail">E-mail:</label>
                        <input type="text" id="e-mail" name="e-mail" placeholder="Digite seu endereço de e-mail" required/>


                        <label for="telefone">Telefone:</label>
                        <input type="tel" id="telefone" name="telefone" placeholder="(99) 99999-9999"/>


                        <label for="senha">Senha:</label>
                        <input type="text" id="senha" name="senha" placeholder="Digite sua senha" required/>

                        <button type="submit">
                            Cadastrar
                        </button>
                    </div>
                    </form>
                    
            </div>
        <p className={Style.hyperlink}><a href="/">Login</a></p>
    </div>

    )
}


function Cadastro() {
    return(
    <div className={Style.container}>
        <div className={Style.Cadastro}>
            
        <Titulo/>
        <CamposCadastro/>

        </div>
    </div>
        
        
    )
    
}

export default Cadastro;