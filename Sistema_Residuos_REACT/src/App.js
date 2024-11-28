import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Home from './components/pages/Home/home';

const App = () => {
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('/api/notificacao/GetNotifications');
        const notifications = response.data;

        notifications.forEach(notification => {
          toast(notification.Mensagem, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000
          });
        });
      } catch (error) {
        console.error('Erro ao buscar notificações:', error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="App">
      <ToastContainer />
      <Home />
      <h1>App</h1>
    </div>
  );
}

export default App;


// import './App.css';
// import Home from '../src/components/pages/Home/home'

// const App = () => {
  
//   return (
//     <div className="container-fluid">
//       <div className="main-content">
//         <Home />
//       </div>
//     </div>
//   );
// }

// export default App;


