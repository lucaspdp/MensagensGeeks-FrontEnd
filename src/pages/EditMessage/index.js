import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Container, Form, ExitButton } from './styles';
import { FaArrowRight, FaWindowClose, FaTrash } from 'react-icons/fa';

export default function SendMessage({match, history}) {

    const [_fase, setFase] = useState('')
    const [_aula, setAula] = useState('')
    const [_msg, setMsg] = useState('')

    useEffect(()=>{
        async function loadMessage(){
            const response = await api.get(`/message/${match.params.msgid}`).catch(e=>{});
            const {fase, aula, mensagem} = response.data;
            setMsg(mensagem);
            setAula(aula);
            setFase(fase);
        }
        loadMessage();
    }, [match.params.msgid])

    async function handleSubmit(e){
        e.preventDefault();
        await api.put(`/edit/${match.params.msgid}`,{
            mensagem:_msg
        }).catch(e=>{});
        history.push('/messages')
    }

    async function deleteMessage(){
        const {msgid} = match.params;

        await api.delete(`/message/${msgid}`);

        history.push('/messages');
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <h1>Edição de Mensagem</h1>

                <span>Fase {_fase} - Aula {_aula}</span>

                <textarea value={_msg} onChange={e=>setMsg(e.target.value)}></textarea>
                <button type='submit'>
                    <FaArrowRight color="#fff" />
                </button>
                <button type='button' onClick={()=>deleteMessage()}>
                    <FaTrash color="#fff" />
                </button>
            </Form>
            <ExitButton>
                <Link to='/messages'>
                    <FaWindowClose color='white'/>
                </Link>
            </ExitButton>
        </Container>
    );
}
