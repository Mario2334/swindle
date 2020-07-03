function output_element(tag){
    let parent = document.getElementById("l-output");
    var node = document.createElement("div");
    node.setAttribute("class", "output-line");
    parent.appendChild(node);
    return node
}


function output_container(){
    return document.getElementsById("output-div")
}


function fetch_data(url){
    return $.get({
        url: url,// mandatory
        data: data,
        async:false // to make it synchronous
    });
}
