import React, {useContext} from "react";
import {Context} from "../store";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

let ReportView = (props) =>{
    let [global_state, dispatch] = useContext(Context);

    return (

        <React.Fragment>
            <div id={"l-output"}>
            </div>
        </React.Fragment>
    )
}

export default ReportView;
