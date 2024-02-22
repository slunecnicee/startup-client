import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4tZUaUlYgzt5XBgaq1vmIejmPV04DsY0",
  authDomain: "starup-9c706.firebaseapp.com",
  projectId: "starup-9c706",
  storageBucket: "starup-9c706.appspot.com",
  messagingSenderId: "131640936958",
  appId: "1:131640936958:web:a1ec0e0ddd892dc24ad8af",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
