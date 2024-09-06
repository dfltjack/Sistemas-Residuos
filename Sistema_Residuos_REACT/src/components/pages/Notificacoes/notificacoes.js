import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import { getMessaging, getToken } from 'firebase/messaging';
import { Button, Card, CardContent, Typography } from '@mui/material';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCQ_yt9g7fWmo_rM3gHIPIyr1gZqSnQUtQ",
  authDomain: "teste-sistema-residuos.firebaseapp.com",
  projectId: "teste-sistema-residuos",
  storageBucket: "teste-sistema-residuos.appspot.com",
  messagingSenderId: "885903321679",
  appId: "1:885903321679:web:98c16073bc55656f1a983a",
  measurementId: "G-RFSV27RWXD",
  databaseURL: "https://teste-sistema-residuos-default-rtdb.firebaseio.com/"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const messaging = getMessaging(app);

const Notificacoes = () => {
  const [notifications, setNotifications] = useState([]);
  
    // Registrar o Service Worker
    if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/firebase-messaging-sw.js')
      .then((registration) => {
        console.log('Service Worker registrado com sucesso:', registration);
      })
      .catch((error) => {
        console.error('Erro ao registrar o Service Worker:', error);
      });
    }

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const notificationsRef = ref(database, 'notifications');
        const snapshot = await get(notificationsRef);
        const notificationsData = snapshot.val();
        if (notificationsData) {
          const notificationsArray = Object.values(notificationsData);
          setNotifications(notificationsArray);
        }
      } catch (error) {
        console.error('Failed to fetch notifications:', error);
      }
    };
    fetchNotifications();
  }, []);

  const sendNotification = async (message) => {
    try {
      const token = await getToken(messaging, { vapidKey: 'BCEfjPsPfKhmgCGSIY5oGT0W4DjLL-WviBc4UBQkcTGHCVnIS2hq4Zhd1qm_cprqMrmPbcYcKsgkmWFyuJR_HYo' });
      await fetch('https://fcm.googleapis.com/fcm/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer YOUR_SERVER_KEY',
        },
        body: JSON.stringify({
          to: token,
          notification: {
            title: 'New Notification',
            body: message,
          },
        }),
      });
      console.log('Notification sent successfully');
    } catch (error) {
      console.error('Failed to send notification:', error);
    }
  };

  const requestNotificationPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      console.log('Permissão de notificação concedida.');
    } else {
      console.error('Permissão de notificação negada.');
    }
  };
  
  // Chame essa função ao carregar a página
  useEffect(() => {
    requestNotificationPermission();
  }, []);
  

  return (
    <div style={{ padding: '20px' }}>
      <h1>Página de Notificações</h1>
      {/* Render the notifications */}
      {notifications.map((notification, index) => (
        <Card key={index} style={{ marginBottom: '10px' }}>
          <CardContent>
            <Typography variant="h5">{notification.title}</Typography>
            <Typography variant="body1">{notification.body}</Typography>
          </CardContent>
        </Card>
      ))}
      <Button variant="contained" color="primary" onClick={() => sendNotification('Test Notification')}>
        Enviar Notificação
      </Button>
    </div>
  );
};

export default Notificacoes;
