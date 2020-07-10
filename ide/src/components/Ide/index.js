import React, {useContext} from "react";
// import Editor from "./Editor";
import AceEditor from "../Editor";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {OutputSwitcher} from "./OutputSwitcher";
import Helpers from "./helpers";
import {Loader} from "../Controller/Loader";

const IDE = (props) =>{
    let [state , setState] = React.useState({loaded :true})
    React.useEffect(() =>{
        window.Helpers = new Helpers();
    },[])
    return (
        <React.Fragment>
            {state.loaded === false ? <Loader/>:null}
            <Row style={{ marginLeft: 0, marginRight: 0 ,height:"100%"}}>
                <Col id={"edit-container"}>
                    <AceEditor state={state} setState={setState}/>
                </Col>
                <Col id={"output-container"}>
                    <OutputSwitcher/>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default IDE
