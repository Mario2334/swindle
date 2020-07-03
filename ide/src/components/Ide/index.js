import React, {useContext} from "react";
// import Editor from "./Editor";
import AceEditor from "../Editor";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {OutputSwitcher} from "./OutputSwitcher";

const IDE = (props) =>{
    let [state , setState] = React.useState({output :""})
    let out_func = ()=>{

    }
    return (
        <Row style={{ marginLeft: 0, marginRight: 0 ,height:"100%"}}>
            <Col id={"edit-container"}>
                <AceEditor output_func={out_func}/>
            </Col>
            <Col id={"output-container"}>
                <OutputSwitcher/>
            </Col>
        </Row>
    )
}

export default IDE
