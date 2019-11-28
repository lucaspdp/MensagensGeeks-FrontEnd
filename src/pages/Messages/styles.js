import styled from 'styled-components';

export const Container = styled.div`
    min-width: 100%;
    height: 100vh;
    
    display: flex;
    flex-direction: row;
`;

export const SideMenu = styled.div`
    height: 100%;
    width: 200px;
    background: linear-gradient(to right ,#852020, #5B1B1B);
    overflow-y: scroll;

    &::-webkit-scrollbar{
        width: 0;
    }

    div{
        border-bottom: 1px solid #852020;
        display: flex;
        align-items: center;
        justify-content: center;
        transition-duration: 0.2s;
        height: 120px;
        cursor: pointer;
        span{
            font-size: 1.5em;
            color: #fff;
            transition-duration: 0.2s;
        }
    }
    div:hover{
        span{
            font-size: 1.6em;
            transition-duration: 0.2s;
        }
        transition-duration: 0.2s;
        background-color: #ff000010;
    }
`;

export const MessagesContainer = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: 40px;
    margin-top: 60px;

    width: 80vw;
    background: linear-gradient(to right, #FFE8E8, #B79A9A);
    border-radius: 40px;
    padding: 40px;

    ul{
        overflow-y: scroll;
        width: 100%;
        height: 100%;

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

    li{
        display: flex;
        flex-direction: column;
        flex: 1;
        margin-top: 20px;
        span{
            font-size: 4em;
            text-align: center;
            margin: 0 auto;
        }
        p{
            margin-top: 20px;
            font-size: 1.2em;
        }

        &+li{
            border-top: 2px solid #ff000010;
        }

        div{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        button{
            width: 60px;
            height: 40px;
            background: #230808;

            border: 0;
            border-radius: 10px;

            padding: 5px 10px;

            color: #fff;
            font-size: 1em;

            text-align: center;
            transition-duration: 0.2s;
            &:hover{
                background-color: #5B1B1B;
                transition-duration: 0.2s;
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