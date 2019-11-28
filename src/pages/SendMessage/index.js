import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Container, Form, Selectable, ExitButton } from './styles';
import { FaArrowRight, FaWindowClose } from 'react-icons/fa';

export default function SendMessage({history}) {

    const [fase, setFase] = useState('')
    const [aula, setAula] = useState('')
    const [msg, setMsg] = useState('')

    const optionsFase = [
        { value: '0', label: 'Fase 0' },
        { value: '1', label: 'Fase 1' },
        { value: '2', label: 'Fase 2' },
        { value: '3', label: 'Fase 3' },
        { value: '4', label: 'Fase 4' },
        { value: '5', label: 'Fase 5' },
        { value: '6', label: 'Fase 6' },
        { value: '7', label: 'Fase 7' },
        { value: '8', label: 'Fase 8' },
        { value: '9', label: 'Fase 9' },
        { value: '10', label: 'Fase 10' },
        { value: '11', label: 'Fase 11' },
        { value: '12', label: 'Fase 12' },
    ]
    const optionsAula = [
        { value: '1', label: 'Aula 1' },
        { value: '2', label: 'Aula 2' },
        { value: '3', label: 'Aula 3' },
        { value: '4', label: 'Aula 4' },
        { value: '5', label: 'Aula 5' },
        { value: '6', label: 'Aula 6' },
        { value: '7', label: 'Aula 7' },
        { value: '8', label: 'Aula 8' },
        { value: '9', label: 'Aula 9' },
        { value: '10', label: 'Aula 10' },
        { value: '11', label: 'Aula 11' },
        { value: '12', label: 'Aula 12' },
        { value: '13', label: 'Aula 13' },
        { value: '14', label: 'Aula 14' },
        { value: '15', label: 'Aula 15' },
        { value: '16', label: 'Aula 16' },
    ]

    function handleFaseChange(newFase){
        const inputFase = newFase.value;
        setFase(inputFase);
    }
    function handleAulaChange(newAula){
        const inputAula = newAula.value;
        setAula(inputAula);
    }
    async function handleSubmit(e){
        e.preventDefault();

        const response = await api.post(`/send`,{
            fase,
            aula,
            mensagem: msg
        }).catch(e=>{
            return alert("Mensagem para esta fase e aula já existente, vá editá-la!")
        });

        if(response){
            alert("Mensagem enviada!")
        }
        return window.location.reload();
    }

    return (
        <Container>
            <Form onSubmit={e=>handleSubmit(e)}>
                <h1>Cadastro de Mensagem</h1>
            
                <Selectable options={optionsFase} onChange={handleFaseChange} placeholder='Selecione uma Fase'/>
                <Selectable options={optionsAula} onChange={handleAulaChange} placeholder='Selecione uma Aula'/>
                <textarea onChange={e=>setMsg(e.target.value)} value={msg}></textarea>
                <button type='submit'>
                    <FaArrowRight color="#fff" />
                </button>
            </Form>
            <ExitButton>
                <Link to='/'>
                    <FaWindowClose color='white'/>
                </Link>
            </ExitButton>
        </Container>
    );
}
