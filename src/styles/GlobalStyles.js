import { createGlobalStyle } from 'styled-components'

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
        height: 100vh;

        .App {
            height: 100vh;

            display: flex;

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

            /* tr:nth-child(even) {
                background-color: #dddddd;
            } */

            .Main {
                margin-left: calc(246px + 32px + 32px);
            }
        }
    }    

    .cards-container {
        display: flex;
        flex-wrap: wrap;
        margin-top: 64px;
    }
`;