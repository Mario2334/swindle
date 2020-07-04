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

    return(
        <div className={props.isTab?"terminalCont term-tab":"terminalCont"}>
            <div id="terminalReslutsCont">
                {global_state.output.map(output => <p>{output}</p>)}
            </div>
            <InputNav/>
        </div>
    )
}
