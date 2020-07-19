import React from 'react'
import {Context} from "../store";
import {pythonConsoleRun} from "../Controller/python_bl";

let InputNav = (props)=>{
    let [global_state, dispatch] = React.useContext(Context);

    const submit_input= (event)=>{
        if(event.key === "Enter"){
            pythonConsoleRun(event.currentTarget.value)
            // document.getElementById('terminalReslutsCont').innerHTML += `<p style="color: red">Text to Add</p>`
            event.currentTarget.value=""
        }
    }

    return(
        <input onKeyDown={submit_input} id="terminalTextInput" type="text" placeholder="Try typing hi or help..." autoComplete="off"/>
    )
}

export default InputNav;
