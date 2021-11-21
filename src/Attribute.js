import { increaseAttribute, reduceAttribute, update, update2 } from "./basic_functions/update.js";

export const Attribute = (props) => (

    <tr>


        <td>{props.attributeKey}:</td>
        <td id={props.id + "-" + props.attributeName}> {props[props.attributeName]}</td>
        <td>   {<button class='update' type='button' onClick={() => increaseAttribute(props.id, props.attributeName)} >+</button>}
            {<button class='update' type='button' onClick={() => reduceAttribute(props.id, props.attributeName)} >-</button>}</td>
    </tr>
)
