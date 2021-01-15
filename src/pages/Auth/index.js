import { useState } from 'react'

import { Container, ContainerForm, ContainerCadastro } from './styles'

import { Link } from 'react-router-dom'

import { BsArrowLeft, BsFillPersonFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { FaLock } from 'react-icons/fa'
import { RiLoginBoxFill } from 'react-icons/ri'

function Login() {
    const [focused, setFocused] = useState(false)
    return (
        <>
            <Container>
                <div className="block">
                    {/* <h1>Melhor server <br />da atualidade</h1> */}
                </div>
                <ContainerForm container="login">
                    <div>
                        <div>
                            <div>
                                <MdEmail color={focused === 'email' ? "#f59300" : "#28272c"} />
                                <input
                                    type="text"
                                    placeholder="E-mail"
                                    name="input-email"
                                    onFocus={() => setFocused('email')}
                                    onBlur={() => setFocused(null)}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <FaLock color={focused === 'senha' ? "#f59300" : "#28272c"} />
                                <input
                                    type="text"
                                    placeholder="Senha"
                                    name="input-senha"
                                    onFocus={() => setFocused('senha')}
                                    onBlur={() => setFocused(null)}
                                />
                            </div>
                        </div>
                    </div>

                    <Link to="/recuperar-senha">
                        <p><strong>Esqueci minha senha</strong></p>
                    </Link>
                    <button>Entrar</button>
                    <p>Não tem uma conta? <Link to="/cadastro"><strong>Registre-se</strong></Link></p>
                </ContainerForm>
            </Container>
        </>
    )
}

export function Cadastro() {
    const [focused, setFocused] = useState()

    return (
        <>
            <Container>
                <ContainerForm container="cadastro" focus={focused}>
                    <h2>Crie sua conta</h2>
                    <div>
                        <div>
                            <div>
                                <MdEmail color={focused === 'email' ? "#f59300" : "#28272c"} />
                                <input
                                    type="email"
                                    placeholder="Seu e-mail"
                                    onFocus={() => setFocused('email')}
                                    onBlur={() => setFocused(null)}
                                    required />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <BsFillPersonFill color={focused === 'nome' ? "#f59300" : "#28272c"} />
                                <input
                                    type="text"
                                    placeholder="Seu nome"
                                    onFocus={() => setFocused('nome')}
                                    onBlur={() => setFocused(null)}
                                    required />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <RiLoginBoxFill color={focused === 'login' ? "#f59300" : "#28272c"} />
                                <input
                                    type="text"
                                    placeholder="Seu login"
                                    onFocus={() => setFocused('login')}
                                    onBlur={() => setFocused(null)}
                                    required />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <FaLock color={focused === 'senha' ? "#f59300" : "#28272c"} />
                                <input
                                    type="password"
                                    placeholder="Sua senha"
                                    onFocus={() => setFocused('senha')}
                                    onBlur={() => setFocused(null)}
                                    required />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <FaLock color={focused === 'rec-senha' ? "#f59300" : "#28272c"} />
                                <input
                                    type="password"
                                    placeholder="Confirme sua senha"
                                    onFocus={() => setFocused('rec-senha')}
                                    onBlur={() => setFocused(null)}
                                    required />
                            </div>
                        </div>
                    </div>
                    <p>Ao se registrar, você aceita nossos <strong>termos de uso</strong> e a nossa <strong>política de privacidade</strong>.</p>
                    <button>CADASTRAR</button>

                    <Link to="/login">
                        <p className="voltar"><BsArrowLeft size={22} />Voltar para login</p>
                    </Link>
                </ContainerForm>
            </Container>
        </>
    )
}

export function RecuperarSenha() {
    const [focused, setFocused] = useState()

    return (
        <Container container="recuperar-senha">
            <ContainerForm container="recuperar-senha">
                <h2 style={{textAlign: 'center', marginBottom: 8}}>Recuperar senha</h2>
                <div>
                    <div>
                        <div>
                            <MdEmail color={focused === 'email' ? "#f59300" : "#28272c"} />
                            <input
                                type="text"
                                placeholder="Digite seu e-mail"
                                onFocus={() => setFocused('email')}
                                onBlur={() => setFocused(null)}
                                required />
                        </div>
                    </div>
                </div>
                <button className="btn-recuperar">RECUPERAR</button>
                <Link to="/login" className="btn-voltar"><p>Voltar</p></Link>
            </ContainerForm>
        </Container>
    )
}

export default Login