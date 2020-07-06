import React from 'react'
import InputNav from "../Editor/inputNav";
import {Context} from "../store";

export let Console = (props)=>{
    let [global_state, dispatch] = React.useContext(Context);
    React.useEffect(()=>{
        scrollToBottomOfResults();
    },[global_state.output])

    let consoleText = () =>{
        let output_list = []
        let is_exception = false
        for (let out of global_state.output){
            if(out === "Python exception:"){
                is_exception = true
                output_list.push(<p style={{color:"red"}}>{out}</p>)
                continue
            }
            if(is_exception){
                output_list.push(<p style={{color:"red"}}>{out}</p>)
                continue
            }
            output_list.push(<p>{out}</p>)
        }
        return <React.Fragment>
            {output_list.map(output => output)}
        </React.Fragment>
    }

    let scrollToBottomOfResults = () =>{
        var terminalResultsDiv = document.getElementById('terminalReslutsCont');
        terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
    }

    return(
        <div className={props.isTab?"terminalCont term-tab":"terminalCont"}>
            <div id="terminalReslutsCont">
                {/*{global_state.output.map(output => <p>{output}</p>)}*/}
                {consoleText()}
            </div>
            <InputNav/>
        </div>
    )
}
