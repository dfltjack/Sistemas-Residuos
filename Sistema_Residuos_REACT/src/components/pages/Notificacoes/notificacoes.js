import React, { useState, useEffect } from 'react';
import { GetNotificacao, GetNotificacaoById, PostNotificacao, PutNotificacao, DeleteNotificacao } from '../../../services/serviceNotificacao'; 

const NotificationsPage = () => {
  const [notificacoes, setNotificacoes] = useState([]);
  const [selectedNotificacao, setSelectedNotificacao] = useState(null);

  useEffect(() => {
    // Carregar todas as notificações
    const fetchNotificacoes = async () => {
      try {
        const response = await GetNotificacao();
        setNotificacoes(response.data);
      } catch (error) {
        console.error('Erro ao carregar notificações:', error);
      }
    };

    fetchNotificacoes();
  }, []);

  const handleSelectNotificacao = async (id) => {
    if (id === undefined || id === null) {
      console.error('ID da notificação é inválido:', id);
      return;
    }

    try {
      const response = await GetNotificacaoById(id);
      setSelectedNotificacao(response.data);
    } catch (error) {
      console.error('Erro ao carregar notificação:', error);
    }
  };

  const handleAddNotificacao = async (notificacao) => {
    try {
      await PostNotificacao(notificacao);
      // Atualizar a lista de notificações após adicionar
      const response = await GetNotificacao();
      setNotificacoes(response.data);
    } catch (error) {
      console.error('Erro ao adicionar notificação:', error);
    }
  };

  const handleUpdateNotificacao = async (notificacao) => {
    try {
      await PutNotificacao(notificacao);
      // Atualizar a lista de notificações após atualizar
      const response = await GetNotificacao();
      setNotificacoes(response.data);
    } catch (error) {
      console.error('Erro ao atualizar notificação:', error);
    }
  };

  const handleDeleteNotificacao = async (id) => {
    if (id === undefined || id === null) {
      console.error('ID da notificação é inválido:', id);
      return;
    }

    try {
      await DeleteNotificacao(id);
      // Atualizar a lista de notificações após deletar
      const response = await GetNotificacao();
      setNotificacoes(response.data);
    } catch (error) {
      console.error('Erro ao deletar notificação:', error);
    }
  };

  return (
    <div>
      <h1>Notificações</h1>
      <ul>
        {notificacoes.map(notificacao => {
          const id = notificacao.notificacaoId; // Use o nome correto da propriedade
          if (!id) {
            console.warn('NotificacaoId é inválido:', notificacao);
            return null; // Não renderizar este item
          }
          return (
            <li key={id}>
              <h2>{notificacao.mensagem}</h2>
              <button onClick={() => handleSelectNotificacao(id)}>Ver Detalhes</button>
              <button onClick={() => handleDeleteNotificacao(id)}>Excluir</button>
            </li>
          );
        })}
      </ul>
      {selectedNotificacao && (
        <div>
          <h2>Detalhes da Notificação</h2>
          <p>ID: {selectedNotificacao.notificacaoId}</p>
          <p>Mensagem: {selectedNotificacao.mensagem}</p>
          <p>Data de Envio: {selectedNotificacao.dataEnvio}</p>
        </div>
      )}
    </div>
  );
};

export default NotificationsPage;
