import logo from './logo.svg';
import './App.css';
import { increaseAttribute, reduceAttribute, update, update2 } from "./basic_functions/update.js";

import React, { useState, useEffect } from 'react';

import { Attribute } from "./Attribute";




const Character = (props) => {


    const [count, setCount] = useState(0);

    return (

        <div className="character_container">
            <h2>{props.character_name}</h2>
            <h3>Played By:{props.user}</h3>
            <h4>{props.campaign}</h4>
            <hr />



            <table>
                <Attribute {...props} attributeName="attribute_strength" attributeKey="strength"/>
                <Attribute {...props} attributeName="attribute_dexterity" attributeKey="dexterity"/>
                <Attribute {...props} attributeName="attribute_constitution" attributeKey="constitution"/>
                <Attribute {...props} attributeName="attribute_wisdom" attributeKey="wisdom"/>
                <Attribute {...props} attributeName="attribute_intelligence" attributeKey="intelligence"/>
                <Attribute {...props} attributeName="attribute_charisma" attributeKey="charisma"/>
            </table>





 






        </div>

    )
}

export default Character;
