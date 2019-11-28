import styled from 'styled-components';

export const Container = styled.div`
    width: 500px;
    height: 350px;
    padding: 10px;

    background: linear-gradient(to right ,#852020, #5B1B1B);

    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10% auto;

    h1{
        color: #fff;
        font-weight: lighter;
        font-size: 2.5em;
    }
`;

export const Form = styled.form`

    display:flex;
    align-items: center;
    flex-direction: column;

    margin-top: 40px;

    input{
        height: 40px;
        width: 300px;

        text-align: center;
        border: 0;  
        border-radius: 10px;

        color: #471414;
    }
    input::placeholder{
        color: #47141460;
        font-size: 20px;
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
        transition-duration: 0.2s;
        &:hover{
            background-color: #4A0A0A;
            transition-duration: 0.2s;
        }
    }

`;

