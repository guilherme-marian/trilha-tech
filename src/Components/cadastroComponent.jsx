function Cadastro(){
    return(
        <div className="card">
            <form action="/cadastro" method="post" class="form-usuario">
                    <div class="form-group">

                        <label for="nome">Nome Completo:</label>
                        <input type="text" id="nome" name="nome" placeholder="Digite seu nome completo" required/>
                        

                        <label for="e-mail">E-mail:</label>
                        <input type="text" id="e-mail" name="e-mail" placeholder="Digite seu endereço de e-mail" required/>


                        <label for="telefone">Telefone:</label>
                        <input type="tel" id="telefone" name="telefone" placeholder="(99) 99999-9999"/>


                        <label for="senha">Senha:</label>
                        <input type="text" id="senha" name="senha" placeholder="Digite sua senha" required/>
                    </div>
                    </form>
                    
            </div>
    )
}

export default Cadastro;