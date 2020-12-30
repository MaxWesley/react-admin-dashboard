import styled from 'styled-components'

export const ContainerSidebar = styled.div`
    position: fixed;
    background-size: cover;
    background-color: #202020;

    background-repeat: no-repeat;
    background-position: bottom left;

    min-width: 246px;
    height: 100%;

    padding: 16px;
    margin-right: 32px;

    color: white;

    display: grid;
    grid-template-rows: 0fr 2fr 0fr;


    header {
        border-bottom: 1px solid #d2d2d255;
    }

    footer {
        button {
            background-color: #f59300;
            
            color: white;

            text-align: left;

            padding: 8px 16px;
            margin-bottom: 32px;
            
            font-size: 16px;
            
            border-radius: 8px;

            width: 100%;

            height: 40px;

            transition: filter ease-in 0.2s;

            display: flex;
            align-items: center;
            
            svg {
                margin-right: 8px;
            }
        }

        button:hover {
            cursor: pointer;
            filter: brightness(90%);
        }
    }
`;
export const ContentSidebar = styled.ul`
    list-style: none;
    padding: 0;

    align-self: flex-start;
`;
export const MenuItem = styled.li`
    height: 40px;

    display: flex;
    align-items: center;

    padding: 8px 16px;

    border-radius: 4px;
    
    transition: background-color ease-in-out 0.2s;

    :hover {
        cursor: pointer;
        background-color: #00c2c9;
    }
`;