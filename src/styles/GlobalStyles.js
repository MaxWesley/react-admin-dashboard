import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    html,
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Poppins', sans-serif;
        overflow: auto;

        background-color: #d2d2d2d2;
    }

    input,
    button {
        border: none;
        outline: none;
    }

    html,
    body,
    #root {
        width: 100vw;
        height: 100vh;

        height: 100vh;

        display: flex;

        a {
            color: white;
            text-decoration: none;

            transition: all 0.2s;
            
            :hover {
                color: #202020;
            }
        }

        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

        td, th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }

        td {
            color: #020202aa;
        
            svg {
                padding: 8px;

                border-radius: 8px;
                transition: all 0.2s;
                :hover {
                    cursor: pointer;
                    background-color: #d2d2d244;
                    filter: brightness(90%);
                }
            }
        }
    }    
`;

export const Main = styled.div`
    padding-top: 64px;
    padding-bottom: 64px;

    margin-left: calc(246px + 32px + 32px);
`