import React, { useState, useEffect } from "react";
import {
  GetNotificacao,
  GetNotificacaoById,
  DeleteNotificacao,
} from "../../../services/serviceNotificacao";
import "./notificacoes.css";

const NotificationsPage = () => {
  const [notificacoes, setNotificacoes] = useState([]);
  const [filteredNotificacoes, setFilteredNotificacoes] = useState([]);
  const [selectedNotificacao, setSelectedNotificacao] = useState(null);
  const [filter, setFilter] = useState("");
  const [recordsToShow, setRecordsToShow] = useState(5); // Número de registros a exibir

  useEffect(() => {
    const fetchNotificacoes = async () => {
      try {
        const response = await GetNotificacao();
        setNotificacoes(response.data);
        setFilteredNotificacoes(response.data.slice(0, recordsToShow)); // Exibir notificações limitadas pelo valor de recordsToShow
      } catch (error) {
        console.error("Erro ao carregar notificações:", error);
      }
    };

    fetchNotificacoes();
  }, [recordsToShow]);

  useEffect(() => {
    const filtered = notificacoes.filter((notificacao) =>
      notificacao.mensagem.toLowerCase().includes(filter)
    );
    setFilteredNotificacoes(filtered.slice(0, recordsToShow));
  }, [filter, recordsToShow, notificacoes]);

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setFilter(searchValue);
  };

  const handleSelectNotificacao = async (id) => {
    if (id === undefined || id === null) {
      console.error("ID da notificação é inválido:", id);
      return;
    }

    try {
      const response = await GetNotificacaoById(id);
      setSelectedNotificacao(response.data);
    } catch (error) {
      console.error("Erro ao carregar notificação:", error);
    }
  };

  const handleDeleteNotificacao = async (id) => {
    if (id === undefined || id === null) {
      console.error("ID da notificação é inválido:", id);
      return;
    }

    try {
      await DeleteNotificacao(id);
      const response = await GetNotificacao();
      setNotificacoes(response.data);
    } catch (error) {
      console.error("Erro ao deletar notificação:", error);
    }
  };

  return (
    <div className="notification-page-background">
      <div className="container">
        <h1>Notificações</h1>

        {/* Barra de busca */}
        <form className="form-inline">
          <input
            type="text"
            className="form-control"
            placeholder="Filtrar notificações"
            value={filter}
            onChange={handleSearch}
          />
        </form>

        {/* Seleção de quantos registros o usuário quer ver */}
        <div className="form-inline">
          <label htmlFor="recordsSelect" className="mr-2">
            Mostrar
          </label>
          <select
            id="recordsSelect"
            className="form-control"
            value={recordsToShow}
            onChange={(e) => setRecordsToShow(Number(e.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
          <span className="ml-2">registros por página</span>
        </div>

        {/* Exibir quantos registros há ao total e quantos estão sendo exibidos */}
        <p>
          {filteredNotificacoes.length} de {notificacoes.length} notificações
          exibidas
        </p>

        <ul>
          {filteredNotificacoes.map((notificacao) => {
            const id = notificacao.notificacaoId;
            if (!id) {
              console.warn("NotificacaoId é inválido:", notificacao);
              return null; // Não renderizar este item
            }
            return (
              <li key={id} className="notification-item">
                <h2>{notificacao.mensagem}</h2>
                <button onClick={() => handleSelectNotificacao(id)}>
                  Ver Mensagem
                </button>
                <button onClick={() => handleDeleteNotificacao(id)}>
                  Excluir
                </button>
                {selectedNotificacao &&
                  selectedNotificacao.notificacaoId === id && (
                    <div className="notification-details">
                      <table className="table-stripped">
                        <tbody>
                          <tr>
                            <th>Mensagem</th>
                            <th>Data de Envio</th>
                          </tr>
                          <tr>
                            <td>{selectedNotificacao.mensagem}</td>
                            <td>{selectedNotificacao.dataEnvio}</td>
                          </tr>
                        </tbody>
                      </table>
                      <button
                        className="close-button"
                        onClick={() => setSelectedNotificacao(null)}
                      >
                        Fechar
                      </button>
                    </div>
                  )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NotificationsPage;


// import React, { useState, useEffect } from "react";
// import {
//   GetNotificacao,
//   GetNotificacaoById,
//   PostNotificacao,
//   PutNotificacao,
//   DeleteNotificacao,
// } from "../../../services/serviceNotificacao";
// import "./notificacoes.css";

// const NotificationsPage = () => {
//   const [notificacoes, setNotificacoes] = useState([]);
//   const [filteredNotificacoes, setFilteredNotificacoes] = useState([]);
//   const [selectedNotificacao, setSelectedNotificacao] = useState(null);
//   const [filter, setFilter] = useState("");
//   const [recordsToShow, setRecodsToShow] = useState(5);

//   useEffect(() => {
//     // Carregar todas as notificações
//     const fetchNotificacoes = async () => {
//       try {
//         const response = await GetNotificacao();
//         setNotificacoes(response.data);
//         setFilteredNotificacoes(response.data.slice(0, recordsToShow)); // Inicialmente, exibir apenas 5 notificações
//       } catch (error) {
//         console.error("Erro ao carregar notificações:", error);
//       }
//     };

//     fetchNotificacoes();
//   }, [recordsToShow]);

//   const handleSearch = (event) => {
//     const searchValue = event.target.value.toLowerCase();
//     setFilter(searchValue);

//     const filtered = notificacoes.filter((notificacao) =>
//       notificacao.mensagem.toLowerCase().includes(searchValue)
//     );
//     setFilteredNotificacoes(filtered.slice(0, recordsToShow)); // Limitar a exibição a 5 notificações filtradas
//   };

//   const handleSelectNotificacao = async (id) => {
//     if (id === undefined || id === null) {
//       console.error("ID da notificação é inválido:", id);
//       return;
//     }

//     try {
//       const response = await GetNotificacaoById(id);
//       setSelectedNotificacao(response.data);
//     } catch (error) {
//       console.error("Erro ao carregar notificação:", error);
//     }
//   };

//   const handleDeleteNotificacao = async (id) => {
//     if (id === undefined || id === null) {
//       console.error("ID da notificação é inválido:", id);
//       return;
//     }

//     try {
//       await DeleteNotificacao(id);
//       // Atualizar a lista de notificações após deletar
//       const response = await GetNotificacao();
//       setNotificacoes(response.data);
//       setFilteredNotificacoes(response.data.slice(0, recordsToShow)); // Atualizar a lista filtrada com limite de 5
//     } catch (error) {
//       console.error("Erro ao deletar notificação:", error);
//     }
//   };

//   return (
//     <div className="notification-page-background">
//       <div className="container-not">
//         <h1>Notificações</h1>

//         {/* Barra de busca */}
//         <form className="form-inline">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Filtrar notificações"
//             value={filter}
//             onChange={handleSearch}
//           />
//         </form>

//         {/* Seleção de quantos registros o usuário quer ver */}
//         <div className="form-inline">
//           <label htmlFor="recordSelect" className="mr-2">
//             Mostrar
//           </label>
//           <select
//             id="recordSelect"
//             className="form-control"
//             value={recordsToShow}
//             onChange={(e) => setRecodsToShow(Number(e.target.value))}
//           >
//             <option value={5}>5</option>  
//             <option value={10}>10</option>  
//             <option value={15}>15</option>  
//             <option value={20}>20</option>  
//           </select>
//           <span className="ml-2">registros por página</span>
//         </div>

//         {/* Exibir quantos registros há ao total e quantos estão sendo exibidos */}
//         <p>
//           {filteredNotificacoes.length} de {notificacoes.length} notificações
//           exibidas
//         </p>

//         <ul>
//           {filteredNotificacoes.map((notificacao) => {
//             const id = notificacao.notificacaoId;
//             if (!id) {
//               console.warn("NotificacaoId é inválido:", notificacao);
//               return null; // Não renderizar este item
//             }
//             return (
//               <li key={id} className="notification-item">
//                 <h2>{notificacao.mensagem}</h2>
//                 <button onClick={() => handleSelectNotificacao(id)}>
//                   Ver Mensagem
//                 </button>
//                 <button onClick={() => handleDeleteNotificacao(id)}>
//                   Excluir
//                 </button>
//                 {selectedNotificacao &&
//                   selectedNotificacao.notificacaoId === id && (
//                     <div className="notification-details">
//                       <table className="table-stripped">
//                         <tbody>
//                           <tr>
//                             <th>Mensagem</th>
//                             <th>Data de Envio</th>
//                           </tr>
//                           <tr>
//                             <td>{selectedNotificacao.mensagem}</td>
//                             <td>{selectedNotificacao.dataEnvio}</td>
//                           </tr>
//                         </tbody>
//                       </table>
//                       <button
//                         className="close-button"
//                         onClick={() => setSelectedNotificacao(null)}
//                       >
//                         Fechar
//                       </button>
//                     </div>
//                   )}
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default NotificationsPage;
