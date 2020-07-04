import React from 'react'
import {Context} from "../store";

let InputNav = (props)=>{
    let [global_state, dispatch] = React.useContext(Context);

    const submit_input= (event)=>{
        if(event.key === "Enter"){
            dispatch({type: 'SET_OUTPUT', payload: event.currentTarget.value})
            // document.getElementById('terminalReslutsCont').innerHTML += `<p style="color: red">Text to Add</p>`
            event.currentTarget.value=""
        }
    }
    const checkWord = (word) =>{

    }
    return(
        <input onKeyDown={submit_input} id="terminalTextInput" type="text" placeholder="Try typing hi or help..." autoComplete="off"/>
    )
}

export default InputNav;
