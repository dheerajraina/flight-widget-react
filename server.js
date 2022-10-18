const PORT = 8000
const cors=require('cors')
const express =require('express')
const  {initializeApp} =require('firebase/app')
const{getFirestore,collection,getDocs,addDoc}=require('firebase/firestore')


require ('dotenv').config()


const app = express()

app.listen(PORT,()=>console.log("Running on port ",PORT))






const firebaseConfig={
    apiKey:process.env.FIREBASE_KEY,

    authDomain:process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket:  process.env.STORAGE_BUCKET,
    messagingSenderId:  process.env.MESSAGING_SENDER_ID,
    appId:  process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID


}

const firebaseApp=initializeApp(firebaseConfig);



const db =getFirestore(firebaseApp)


 async function getflights(db) {
     // saveFlights(db);
     const flightCollection = collection(db, 'flights');
     const flightSnapshot = await getDocs(flightCollection);
     const flightsList = flightSnapshot.docs.map(doc => doc.data());
     console.log(flightsList);
     return flightsList;
 }


app.get('/flights',async (req,res)=>{


    await getflights(db).then().then(response=>{
        console.log(response);
        res.json(response)
    }).catch(error=>{
        console.log(error);
    });

});






















