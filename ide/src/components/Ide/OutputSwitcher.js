import React from "react";
import ReportView from "../ReportVIew/ReportView";
import {Console} from "../Console";
import Row from "react-bootstrap/Row";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export const OutputSwitcher = (props) => {
    const [state,setState] = React.useState({viewType:"Console"})

    let select_tab = (viewType)=>{
        if(state.viewType !== viewType){
            setState({...state,viewType:viewType})
        }
    }

    return window.chrome.devtools
        ?(
            <div style={{height:"100%"}}>
                <Tabs activeKey={state.viewType} onSelect={(k)=>select_tab(k)}>
                    <Tab eventKey="Console" title="Console">
                        <Console/>
                    </Tab>
                    <Tab eventKey="Report" title={"Report"}>
                        <ReportView/>
                    </Tab>
                </Tabs>
            </div>
        )
        :(
            <Row style={{height: "100%", marginLeft: 0, marginRight: 0}}>
                <div style={{width:"100%" , height: "60%"}}>
                    <div id="Report-View">
                        <ReportView/>
                    </div>
                </div>
                <br/>
                <div style={{width:"100%" , height: "40%"}}><div id="Console-View">
                    <Console isTab={true}/>
                    </div>
                </div>
            </Row>
        )
}
