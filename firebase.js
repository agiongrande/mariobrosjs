import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js'

import {
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  query,
  limit,
  setDoc,
  getDoc,
  orderBy,
  updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js';

const firebaseConfig = {
  
  apiKey: "AIzaSyBZXD16MiCnHCSidRyEQlOk0LIcbzSrf10",
  authDomain: "mariojs-a31fb.firebaseapp.com",
  projectId: "mariojs-a31fb",
  storageBucket: "mariojs-a31fb.appspot.com",
  messagingSenderId: "676690526873",
  appId: "1:676690526873:web:fa2462d14b49af10136e08",
  measurementId: "G-8BH9WFXH20"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const maxUsersInRanking = 10
export async function readRanking(){

const q = query(collection(db, "ranking"), orderBy("puntaje", "desc"));

const querySnapshot = await getDocs(q);

let rankingLength = querySnapshot.size;
var ranking = new Array(2);
ranking[0] = new Array(rankingLength);
ranking[1] = new Array(rankingLength);
let i = 0;

querySnapshot.forEach((doc) => {
    ranking[0][i] = doc.data().usuario;
    ranking[1][i] = doc.data().puntaje;
  i++;
});

return(ranking);
 
}



export async function readRankingLength(){

    const q = query(collection(db, "ranking"), orderBy("puntaje", "desc"));
    
    const querySnapshot = await getDocs(q);
    
    let rankingLength = querySnapshot.size;
    
    return(rankingLength);
     
}

export async function readLastUserPoints(){
    let lastRank = 0
    const q = query(collection(db, "ranking"), orderBy("puntaje", "asc"), limit(1));
    
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        
        lastRank = doc.data().puntaje;
    })
    return(lastRank); 
     
}

export async function UpdateRanking(user,points){
    const q = query(collection(db, "ranking"), orderBy("puntaje", "desc"));
    
    const querySnapshot = await getDocs(q);
    
    let rankingLength = querySnapshot.size;

    if (rankingLength < maxUsersInRanking){ // el ranking no está completo
        const docRef = await addDoc(collection(db, "ranking"), {
            usuario: user,
            puntaje: points
          })
    } else { // el ranking está completo, se actualiza el último lugar
        const q = query(collection(db, "ranking"), orderBy("puntaje", "asc"), limit(1));
        let id = 0
        const querySnapshot = await getDocs(q);
        
        querySnapshot.forEach((doc) => {
            id = doc.id
        })
        await setDoc(doc(db, "ranking", id), {
        usuario: user,
        puntaje: points
          });
          return;

    }
    }