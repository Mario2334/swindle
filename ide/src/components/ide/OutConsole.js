import React, {useContext} from "react";
import {Context} from "../store";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

let OutConsole = (props) =>{
    let [global_state, dispatch] = useContext(Context);

    return (
        <React.Fragment>
            <Container id="output">
                {global_state.output.map(output =><Row>{output}</Row>)}
            </Container>
        </React.Fragment>
    )
}

export default OutConsole;
