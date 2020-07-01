import React, {useContext} from "react";
import {Context} from "../store";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

let OutConsole = (props) =>{
    let [global_state, dispatch] = useContext(Context);

    return (
        // <React.Fragment>
        //     <Container id="output">
        //         <div id={"l-output"}>
        //             {global_state.output.map(output =><Row className="output-line"><p>{output}</p></Row>)}
        //         </div>
        //     </Container>
        // </React.Fragment>

        <React.Fragment>
            {global_state.output.map(output =><Row><p>{output}</p></Row>)}
        </React.Fragment>
    )
}

export default OutConsole;
