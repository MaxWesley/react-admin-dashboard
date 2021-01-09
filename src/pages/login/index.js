
import { ContainerLogin, ContainerForm } from './styles'

function Login() {
    return (
        <>
            <ContainerLogin>
                <div className="block">
                    {/* <h1>Melhor server <br />da atualidade</h1> */}
                </div>
                <ContainerForm>
                    <input type="text" placeholder="E-mail" name="input-email" />
                    <input type="text" placeholder="Senha" name="input-senha" />
                    <p><strong>Esqueci minha senha</strong></p>
                    <button>Entrar</button>
                    <p>Não tem uma conta? <strong>Registre-se</strong></p>
                </ContainerForm>
            </ContainerLogin>
        </>
    )
}

export default Login