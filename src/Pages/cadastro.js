import React from 'react';
import './cadastro.css';


function Titulo(){
    
        return(
            <div className="titulo">
                <h1>Trilha Tech</h1>
                <p>Descubra seu potencial na tecnologia!</p>
            </div>
        );
    
}
function CamposCadastro(){
    return(
        

        <div className="campos-cadastro">
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

    )
}


function Cadastro() {
    return(
        
        <div className="cadastro">
            
        <Titulo/>
        <CamposCadastro/>

        </div>
        
    )
    
}

export default Cadastro;