import styled from 'styled-components';

export const Imagem = styled.div`
    height: 100vh;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;

    @keyframes bump{
        from{
            height: 50%;
            width: 50%;
            filter: grayscale(30%) brightness(70%);
        }
        to{
            height: 55%;
            width: 55%;
            filter: grayscale(25%) brightness(70%);
        }
    }

    img{
        height: 50%;
        width: 50%;
        object-fit: contain;
        animation: bump 1s alternate infinite;

    }
`;

export const Container = styled.div`

    min-height: 100vh;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;


    h1{
        color: #fff;
        font-weight: lighter;
        font-size: 2.5em;
    }
`;

export const Form = styled.form`

    width: 30%;
    height: 100vh;

    display:flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    background: linear-gradient(to right , #852020, #361414);

    h1{
        font-size: 4em;
    }

    input{
        height: 40px;
        width: 300px;

        margin-top: 50px;
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

