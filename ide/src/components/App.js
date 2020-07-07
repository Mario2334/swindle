import React, {useContext} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IDE from "./Ide";
import {Context} from "./store";
import {Loader} from "./Controller/Loader";

function App() {
    let is_code=false
    let [state,setState] = React.useState({loaded:false});

    let [global_state, dispatch] = useContext(Context);

    React.useEffect(()=>{

        window.languagePluginLoader.then(()=>setState({loaded:true}))
        window.console.log = function(msg , code){
            if(msg === "<<<<< Python Output >>>>>"){
                if(!is_code) {
                    is_code = true
                }
                else {
                    is_code = false
                }
            }

            if (is_code && msg !== "<<<<< Python Output >>>>>") {
                if(typeof msg == "object"){
                    msg = JSON.stringify(msg)
                }
                dispatch({type: 'SET_OUTPUT', payload: msg})
            }
        }
    },[])
  return (
      <div className="App">
          {state.loaded === false ? <Loader/>:null}
          <IDE/>
      </div>

  );
}

export default App;
