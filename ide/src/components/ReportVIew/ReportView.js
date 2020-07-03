import React, {useContext} from "react";
import {Context} from "../store";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

let ReportView = (props) =>{
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
            <div id={"l-output"}>
                {/*{global_state.output.map(output =><Row style={{marginLeft: 0, marginRight: 0}}><p>{output}</p></Row>)}*/}
            </div>
        </React.Fragment>
    )
}

export default ReportView;
