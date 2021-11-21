import logo from './logo.svg';
import './App.css';

import { app } from './firebase.config';
import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import Character from "./Character";

const db = getFirestore(app);




function App() {

  const [chars, setChars] = useState([])

  const fetchChars = async () => {

    const response = collection(db, 'character');
    const data = await getDocs(response);
    console.log(data);
  


    //const characterList = data.docs;
    const characterList = data.docs.map(doc =>({...doc.data(),id:doc.id}));
    console.log(characterList);

    setChars([...characterList]);


  }


  useEffect(() => {
    fetchChars();
  }, []);


  const [count, setCount] = useState(0);


  useState(() => {

  }, []);

  return (


    <div className="App">
      {
        chars && chars.map(char => {


          return (

            <Character {...char}></Character>
          )
        })
      }
    </div>

  );
}

export default App;
