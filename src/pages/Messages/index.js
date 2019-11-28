import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Container, SideMenu, MessagesContainer, ExitButton } from './styles';
import { FaWindowClose } from 'react-icons/fa';

export default function Messages({history}) {

  const fases = [0,1,2,3,4,5,6,7,8,9,10,11,12];
  const [faseAtual, setFaseAtual] = useState(0);
  const [messages, setMessages] = useState([]);

  useEffect(()=>{
    async function loadMessages(){
      const response = await api.get(`/messages?fase=${faseAtual}`).catch(e=>{});
      setMessages(response.data);
    }
    loadMessages();
  }, [faseAtual])

  async function handleClickFase(e, fase){
    e.preventDefault();
    setFaseAtual(fase);
  }
  function handleEdit(mensagem){
    history.push(`/edit/${mensagem}`)
  }

  return (
    <Container>
        <SideMenu>
          {fases.map(fase=>(
            <div key={fase} onClick={e=>handleClickFase(e, fase)}>
              <span style={{color: faseAtual === fase && ('#f0f250')}}>Fase {fase}</span>
            </div>
          ))}
        </SideMenu>
        <MessagesContainer>
          <ul>
            {messages.map(message=>(
              <li key={message._id}>
                <div>
                  <span>Aula {message.aula}</span>
                  <button onClick={()=>handleEdit(message._id)}>Editar</button>
                </div>
                <p>{message.mensagem}</p>
              </li>
            ))}
          </ul>
        </MessagesContainer>
        
        <ExitButton>
            <Link to='/'>
                <FaWindowClose color='white'/>
            </Link>
        </ExitButton>
    </Container>
  );
}
