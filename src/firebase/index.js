import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCAVTdVvW4VmXg77SmfWxpOe557sN6orE",
  authDomain: "coderhouse-ecommerce-b4b71.firebaseapp.com",
  projectId: "coderhouse-ecommerce-b4b71",
  storageBucket: "coderhouse-ecommerce-b4b71.appspot.com",
  messagingSenderId: "826433812608",
  appId: "1:826433812608:web:5bc39c8a7c9bcef26dce65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const getData= () => getFirestore(app);