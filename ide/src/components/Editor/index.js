import React, {useContext, useReducer} from "react";
import Navbar from "react-bootstrap/Navbar";
import {Context} from "../store";
import pythonEditorRun from "../Controller/python_bl";
import {getChromePath} from "../../utils/compUtiles";
import jsPDF from "jspdf"
import html2canvas from "html2canvas"

let AceEditor = (props) =>{
    let [state , setState] =React.useState({editor : null,code:""})
    let [global_state, dispatch] = useContext(Context);

    React.useEffect(()=>{
        setState({editor : window.ace.edit("editor")})

    },[]);

    const handleOnRun = (event) =>{
        props.setState({loaded:false})
        dispatch({type: 'RESET_OUTPUT'})
        let code = state.editor.getValue();
        let reportView = document.getElementById("l-output")
        reportView.innerHTML =""
        pythonEditorRun(code).then().catch((e)=>{
            console.log(e)
            console.log("<<<<< Python Output >>>>>")
        }).finally(()=>props.setState({loaded:true}))
    }

    let newTab = (event) =>{
        if (window.chrome.extension){
            window.chrome.tabs.create({url:window.location.href})
        }
    }

    const handleReportPDF = (event) =>{
        let report_ele = document.getElementById("l-output");
        let report_w = report_ele.offsetWidth;
        let report_h = report_ele.offsetHeight;

        html2canvas(document.getElementById("l-output") , {width:report_w,height:report_h}).then(canvas => {
           var img = canvas.toDataURL("image/png", 1.0);
            let width = canvas.width
           let height = canvas.height
           let millimeters={}
           millimeters.width = width
           millimeters.height = height
           let doc = new jsPDF("p", "mm", "a4")
           doc.deletePage(1);
           doc.addPage(millimeters.width, millimeters.height);
           doc.addImage(img, 'PNG',0,0);
           doc.save('Report-View.pdf');
       });
    }
    if(state.editor){
        state.editor.setTheme("ace/theme/monokai");
        state.editor.session.setMode("ace/mode/python")
        state.editor.setHighlightActiveLine(true);
    }

    return(
        <React.Fragment>
            <Navbar id="console-runner" bg="light">
               <Navbar.Brand><img className={"console-img"} src={getChromePath("/images/play_button.svg")} onClick={handleOnRun}/></Navbar.Brand>
                {window.chrome.devtools?<Navbar.Brand><img className={"console-img"} onClick={newTab} src={getChromePath("/images/development.svg")}/></Navbar.Brand>:null}
                <Navbar.Brand className="nav-brand-end"><img className={"console-img"} src={getChromePath("/images/pdf.svg")} onClick={handleReportPDF}/></Navbar.Brand>
            </Navbar>
        <div id="editor"></div>
        </React.Fragment>
    )
}

export default AceEditor;
