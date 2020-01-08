import React, { useState } from 'react';

import { Container, Form, Loading, Imagem } from './styles';
import api from '../../services/api';

import Logo from '../../images/cabeca.png';

export default function Main({history}) {

    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false)

    async function handleLogin(e){
        setLoading(true)
        e.preventDefault();
        const response = await api.post('/login',{
            codigo: code
        }).catch(e=>{
            setLoading(false);
            alert("Código inválido");
        })

        if(response){
            if(response.data.sender){
                history.push('/newmessage');
            }else{
                history.push('/messages');
            }
            setLoading(false);
        }
    }
    /*return (
        <>
            <Container>
                <h1>Mensagens</h1>
                <Form onSubmit={handleLogin}>
                    <input type='text' placeholder='Código de acesso' value={code} onChange={t=>setCode(t.target.value)}/>
                    <button type='submit'>
                            Entrar
                    </button>
                </Form>
            </Container>
        </>
    );*/

    return (
        <>
                <Container>
                <Imagem>
                    <img src={Logo} alt="Super Geeks" />
                </Imagem>
                <Form onSubmit={handleLogin}>
                    <h1>Super Geeks</h1>
                    <input type='text' placeholder='Código de acesso' value={code} onChange={t=>setCode(t.target.value)}/>
                    <button type='submit'>
                            Entrar
                    </button>
                </Form>
            </Container>
        </>
    )
}
