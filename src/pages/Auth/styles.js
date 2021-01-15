import styled from 'styled-components'

export const ContainerLogin = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    width: 100vw;

    min-height: 100vh;

    background: rgb(18, 18, 20);
    
    div.block {
        background-image: url("https://cdna.artstation.com/p/assets/images/images/026/407/140/large/sebastian-cavazzoli-01cold.jpg?1588698542");
        background-position: bottom right;
        background-size: cover;
        background-repeat: no-repeat;


        width: 100%;
        max-width: 580px;
        height: 100vh;

        position: relative;

        h1 {
            font-size: 56px;
            color: white;

            position: absolute;
            bottom: 128px;
            right: 246px;
        }

        padding-left: 64px;
        padding-right: 64px;
    }
`

export const ContainerCadastro = styled(ContainerLogin)``

export const ContainerForm = styled.form`
    position: relative;

    max-width: 380px;
    background: rgb(32, 32, 36);
    
    padding: 64px;

    border-radius: 5px;

    margin-right: ${props => props.container === 'login' ? "64px" : null};
    margin-left: ${props => props.container === 'cadastro' ? "64px" : null};

    h2 {
        color: #FFFFFF;
    }

    div {
        
        div {
            display: flex;
            align-items: center;
            div {
                position: relative;
                flex: 1 1 0%;
            }
        }

        svg {
            position: absolute;
            font-size: 14px;

            top: 50%;
            left: 16px;

            transition: fill 0.2s ease 0s;
        }
    }
    input {
        width: 100%;
        height: 50px;
        
        font-size: 16px;

        background: rgb(18, 18, 20);

        border: 2px solid rgb(40, 39, 44);
        border-radius: 5px;

        color: rgb(255, 255, 255);
        padding: 0px 1em 0px 2.65em;
        
        
        outline: 0px;
        -moz-outline-radius: 5px;

        transition: all 0.2s;

        :last-of-type {
            margin-top: 16px;
        }

        :focus {
            border-color: #f59300;
        }
    }

    p {
        color: white;
        font-size: 14px;

        :first-of-type {
            margin-top: 4px;
            font-size: 12px;
        }

        strong {
            color: #f59300;
            transition: filter 0.2s ease-in-out;
            cursor: pointer;

            :hover{
                filter: brightness(120%);
            }
        }

        :last-of-type {
            text-align: center;
        }
    }

    button {
        width: 100%;
        border-radius: 5px;
        
        height: 50px;
        
        font-size: 16px;
        font-weight: bold;
        text-transform: uppercase;
        
        color: rgb(255, 255, 255);

        background-color: #f59300;

        transition: all 0.2s ease 0s, color 0.2s ease 0s;
        cursor: pointer;

        :hover {
            filter: brightness(95%);
        }
    }

    p.voltar {

        color: #f59300;
        font-weight: bold;
        font-size: 14px;

        cursor: pointer;

        :hover{
            filter: brightness(120%);
        }

        position: absolute;
        bottom: -44px;
        right: 0;

        display: flex;
        align-items: center;

        svg {
            margin-right: 8px;
        }
    }
`