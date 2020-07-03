import React from 'react'

let InputNav = (props)=>{

    let addTextToResults = (textToAdd)=>{
        document.getElementById('terminalReslutsCont').innerHTML += "<p>" + textToAdd + "</p>";
        props.scrollToBottomOfResults();
    }
    const submit_input= (event)=>{
        if(event.key === "Enter"){
            console.log(event.current);
            document.getElementById('terminalReslutsCont').innerHTML += `<p style="color: red">Text to Add</p>`
            props.scrollToBottomOfResults();
        }
    }
    const checkWord = (word) =>{

    }
    return(
        <input onKeyDown={submit_input} id="terminalTextInput" type="text" placeholder="Try typing hi or help..." autoComplete="off"/>
    )
}

export default InputNav;
