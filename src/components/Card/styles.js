import styled from 'styled-components'

export const ContainerCard = styled.div`
    width: ${props => (props.type === "small") ? "300px" : "100%"};
    height: ${props => (props.type === "small") ? "100px" : null};;

    background-color: #FFF;

    padding: 16px; 
    padding-top: ${props => (props.type==="large" ? "128px" : null)};
    
    border: none;
    border-radius: 7px;

    margin-top: 32px;
    margin-right: 32px;

    position: relative;

    .text-infos {
        text-align: ${props => (props.type === "large") ? "left" : "right"};

        width: auto;

        p {
            margin: 0;
            font-size: 22px;
            font-weight: 500;

            color: #2d2d2daa;

            :first-of-type {
                font-size: 14px;
                font-weight: normal;
            }
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
export const ThumbCard = styled.div`
    background-color: ${props => props.color ? props.color : "#858585"};
    color: white;

    width: ${props => (props.type === "small") ? "80px" : "94%"};;
    height: ${props => (props.type === "small") ? "80px" : "100px"};;

    border-radius: 4px;
    padding: ${props => (props.type === "large") ? "16px" : null};

    position: absolute;
    top: -24px;
    left: 16px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;