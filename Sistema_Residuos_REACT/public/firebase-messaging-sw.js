/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */  

importScripts('https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.1/firebase-messaging.js');

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCQ_yt9g7fWmo_rM3gHIPIyr1gZqSnQUtQ",
  authDomain: "teste-sistema-residuos.firebaseapp.com",
  projectId: "teste-sistema-residuos",
  storageBucket: "teste-sistema-residuos.appspot.com",
  messagingSenderId: "885903321679",
  appId: "1:885903321679:web:98c16073bc55656f1a983a",
  databaseURL: "https://teste-sistema-residuos-default-rtdb.firebaseio.com/"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Quando uma mensagem push é recebida em segundo plano
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
