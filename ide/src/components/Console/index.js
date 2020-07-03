import React from 'react'
import InputNav from "../Editor/inputNav";
import {Context} from "../store";

export let Console = (props)=>{
    let [global_state, dispatch] = React.useContext(Context);
    React.useEffect(()=>{
        scrollToBottomOfResults();
    },[global_state.output])

    let scrollToBottomOfResults = () =>{
        var terminalResultsDiv = document.getElementById('terminalReslutsCont');
        terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
    }
    let printText = (text) =>{
        document.getElementById('terminalReslutsCont').innerHTML += `<p>Text to Add</p>`
        scrollToBottomOfResults();
    }
    return(
        <div className={props.isTab?"terminalCont term-tab":"terminalCont"}>
            <div id="terminalReslutsCont">
                {global_state.output.map(output => <p>{output}</p>)}
            </div>
            <InputNav scrollToBottomOfResults = {scrollToBottomOfResults}/>
        </div>
    )
}
