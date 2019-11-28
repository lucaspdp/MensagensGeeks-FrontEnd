import styled from 'styled-components';
import Select from 'react-select';

export const Container = styled.div`
`;
export const Form = styled.form`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    textarea{
        width: 100%;
        height: 350px;
        font-size: 1.5em;
        color: #5B1B1B;
        resize: none;
    }
    h1{
        margin-top: 40px;
        color: #fff;
        font-weight: lighter;
        font-size: 4em;
        text-align: center;
    }

    span{
        margin-top: 10px;
        color: #fff;
        font-weight: lighter;
        font-size: 2em;
        text-align: center;
    }

    button{
        width: 125px;
        height: 40px;

        margin-top: 20px;
        background: #230808;

        border: 0;
        border-radius: 10px;

        padding: 10px 20px;

        color: #fff;
        font-size: 1.4em;

        text-align: center;
    }
`;

export const Selectable = styled(Select)`
    border: 0;
    margin-top: 20px;
    width: 100%;
    max-width: 400px;
    div{
        &::-webkit-scrollbar{
            width: 10px;
        }
        &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px grey;
            border-radius: 10px;
        }
        &::-webkit-scrollbar-thumb {
            background: #5B1B1B;
            border-radius: 10px;
            &:hover{
                background: #852020;
            }
        }
    } 

    
`;


export const ExitButton = styled.div`

    position: absolute;
    top: 0;
    right: 0;

    svg{
        width: 40px;
        height: 40px;
    }

`;