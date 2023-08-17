import {getApp,getApps,initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCElNNItKzL6Lrt6oNCgJSH9lUNkmGUyTw",
    authDomain: "groca-b67f6.firebaseapp.com",
    projectId: "groca-b67f6",
    storageBucket: "groca-b67f6.appspot.com",
    messagingSenderId: "692912629284",
    appId: "1:692912629284:web:5618cfe5d8d3d2555b5ab1"
};

const app=getApps.length>0 ? getApp():initializeApp(firebaseConfig);
const db=getFirestore(app);
const storage=getStorage(app);
const auth=getAuth();

export {app,db,storage,auth};
