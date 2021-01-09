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
        max-width: 880px;
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

export const ContainerForm = styled.form`
    max-width: 480px;
    background: rgb(32, 32, 36);
    
    padding: 64px;

    border-radius: 5px;

    margin-right: 128px;

    display: flex;
    flex-direction: column;



    input {
        /* width: 100%; */
        height: 50px;
        
        padding: 0px 1em 0px 2.65em;

        font-size: 16px;

        background: rgb(18, 18, 20);

        border: 2px solid rgb(40, 39, 44);
        border-radius: 5px;

        color: rgb(255, 255, 255);
        
        
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
`