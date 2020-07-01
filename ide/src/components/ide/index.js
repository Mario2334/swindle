import React, {useContext} from "react";
// import Editor from "./Editor";
import AceEditor from "../Editor/Editor";
import OutConsole from "./OutConsole";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const IDE = (props) =>{
    let [state , setState] = React.useState({output :""})
    let out_func = ()=>{

    }
    return (
        <Row style={{ marginLeft: 0, marginRight: 0 }}>
            <Col id={"edit-container"}>
                <AceEditor output_func={out_func}/>
            </Col>
            <Col id={"output-container"}>
                <OutConsole/>
            </Col>
        </Row>
    )
}

export default IDE
