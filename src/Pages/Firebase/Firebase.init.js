import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initAuthentication;