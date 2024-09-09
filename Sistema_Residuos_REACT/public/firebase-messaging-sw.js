import { useEffect } from 'react';
import { getMessaging, getToken } from 'firebase/messaging';
import { initializeApp } from 'firebase/app';
import { SaveToken } from './services/tokenService'; // Ajuste o caminho conforme necessário

const firebaseConfig = {
  apiKey: "AIzaSyCQ_yt9g7fWmo_rM3gHIPIyr1gZqSnQUtQ",
  authDomain: "teste-sistema-residuos.firebaseapp.com",
  projectId: "teste-sistema-residuos",
  storageBucket: "teste-sistema-residuos.appspot.com",
  messagingSenderId: "885903321679",
  appId: "1:885903321679:web:98c16073bc55656f1a983a",
  databaseURL: "https://teste-sistema-residuos-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

const useFirebaseMessaging = () => {
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const currentToken = await getToken(messaging, {
          vapidKey: 'BCEfjPsPfKhmgCGSIY5oGT0W4DjLL-WviBc4UBQkcTGHCVnIS2hq4Zhd1qm_cprqMrmPbcYcKsgkmWFyuJR_HYo' // Substitua com sua chave VAPID
        });
        if (currentToken) {
          console.log('Token de notificação:', currentToken);
          await SaveToken(currentToken);
          console.log('Token salvo com sucesso.');
        } else {
          console.log('Nenhum token disponível. Solicite permissão para receber notificações.');
        }
      } catch (error) {
        console.error('Erro ao obter token de notificação:', error);
      }
    };

    fetchToken();
  }, []);
};

export default useFirebaseMessaging;

