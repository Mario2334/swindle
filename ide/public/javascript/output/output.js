const output_element = (tag)=>{
    let parent = document.getElementById("l-output");
    var node = document.createElement("div");
    node.setAttribute("class", "output-line");
    parent.appendChild(node);
    return node
}


const output_container = () =>{
    return document.getElementsById("output-div")
}
