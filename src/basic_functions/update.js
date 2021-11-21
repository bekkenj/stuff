

import { app } from '../firebase.config';

import { getFirestore, collection, getDocs, doc, updateDoc, increment, decrement } from 'firebase/firestore/lite';



export const update = (character_id) => {

    //alert(character_id);

    const db = getFirestore(app);
    const response = collection(db, 'character');
    const data = getDocs(response);

    const characterDocument = doc(db, "character", character_id);
    updateDoc(characterDocument, {
        attribute_constitution: increment(1)
    });






}


export const increaseAttribute = (character_id, attribute_name) => {
  //  alert(attribute_name + " " + character_id);;
    const db = getFirestore(app);
    const response = collection(db, 'character');
    const data = getDocs(response);
    const characterDocument = doc(db, "character", character_id);
    updateDoc(characterDocument, {
        [attribute_name]: increment(1)
    });
    var textField = document.getElementById(character_id + "-" + attribute_name);
    var value = textField.innerHTML;
    if (value==""|| value==null){
        value="0";
    }
    value = parseInt(value);
    value++;



    textField.innerHTML = value;
}

export const reduceAttribute = (character_id, attribute_name) => {
    const db = getFirestore(app);
    const response = collection(db, 'character');
    const data = getDocs(response);
    const characterDocument = doc(db, "character", character_id);
    updateDoc(characterDocument, {
        [attribute_name]: increment(-1)
    });
    var textField = document.getElementById(character_id + "-" + attribute_name);
    var value = textField.innerHTML;
    value = parseInt(value);
    value--;



    textField.innerHTML = value;
}




export const update2 = () => {
    alert("Doing Update2");
}
