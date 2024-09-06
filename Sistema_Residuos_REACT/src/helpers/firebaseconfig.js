import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, child } from 'firebase/database';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

// Configuração do Firebase
const firebaseConfig = {
        apiKey: "AIzaSyCQ_yt9g7fWmo_rM3gHIPIyr1gZqSnQUtQ",
        authDomain: "teste-sistema-residuos.firebaseapp.com",
        projectId: "teste-sistema-residuos",
        storageBucket: "teste-sistema-residuos.appspot.com",
        messagingSenderId: "885903321679",
        appId: "1:885903321679:web:98c16073bc55656f1a983a",
        measurementId: "G-RFSV27RWXD"
    };

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const messaging = getMessaging(app);

// import firebase, { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
// import 'firebase/database';
// import 'firebase/messaging';

// // const firebaseConfig = {
// //   apiKey: "YOUR_API_KEY",
// //   authDomain: "YOUR_AUTH_DOMAIN",
// //   databaseURL: "YOUR_DATABASE_URL",
// //   projectId: "YOUR_PROJECT_ID",
// //   storageBucket: "YOUR_STORAGE_BUCKET",
// //   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
// //   appId: "YOUR_APP_ID",
// // };
// const firebaseConfig = {
//     apiKey: "AIzaSyCQ_yt9g7fWmo_rM3gHIPIyr1gZqSnQUtQ",
//     authDomain: "teste-sistema-residuos.firebaseapp.com",
//     projectId: "teste-sistema-residuos",
//     storageBucket: "teste-sistema-residuos.appspot.com",
//     messagingSenderId: "885903321679",
//     appId: "1:885903321679:web:98c16073bc55656f1a983a",
//     measurementId: "G-RFSV27RWXD"
//   };

//   //db7u9Q0SYq7feVwfuQrE9jiXJ79IQNIRIQfDm8OTIl8 - chave privada push

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// } else {
//   firebase.app(); // Se já estiver inicializado, use a instância existente
// }

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
