import React, {useContext, useReducer} from "react";
import Navbar from "react-bootstrap/Navbar";
import {Context} from "../store";
import pythonConsoleRun from "../Controller/python_bl";
import {getChromePath} from "../../utils/compUtiles";

let AceEditor = (props) =>{
    let [state , setState] =React.useState({editor : null,code:""})
    let [global_state, dispatch] = useContext(Context);

    React.useEffect(()=>{
        setState({editor : window.ace.edit("editor")})
    },[]);

    const handleOnSubmit = (event) =>{
        dispatch({type: 'RESET_OUTPUT'})
        let code = state.editor.getValue();
        pythonConsoleRun(code).then().catch((e)=>{
            console.log("<<<<< Python Output >>>>>")
        }

        )

    }

    if(state.editor){
        state.editor.setTheme("ace/theme/monokai");
        state.editor.session.setMode("ace/mode/python")
        state.editor.setHighlightActiveLine(true);
        // state.editor.on("change", function(e){
        //     console.log(state.editor.session.getDocument().$lines)
        //     for(let line in state.editor.session.getDocument().$lines){
        //         console.log(state.editor.session.getDocument().$lines[line]);
        //     }
        // })
    }

    return(
        <React.Fragment>
            <Navbar id="console-runner" bg="light">
               <img className={"console-img"} src={getChromePath("/images/play_button.svg")} onClick={handleOnSubmit}/>
                <img className={"console-img"} src={getChromePath("/images/development.svg")}/>
            </Navbar>
        <div id="editor"></div>
        </React.Fragment>
    )
}

export default AceEditor;
