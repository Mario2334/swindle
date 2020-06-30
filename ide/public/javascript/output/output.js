var output_element = (tag) =>{
    let parent = document.getElementById("output");
    var node = document.createElement(tag);
    parent.appendChild(node);
    return node
}
output_element
