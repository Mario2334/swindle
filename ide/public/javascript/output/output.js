function output_element(tag){
    let parent = document.getElementById("l-output");
    var node = document.createElement(tag);
    node.setAttribute("class", "output-line");
    parent.appendChild(node);
    return node
}


function output_container(){
    return document.getElementsById("output-div")
}


function fetch_data(url,type=null){
    var data = null;
    //todo send type as well
    $.get({
        url: url,// mandatory
        async:false, // to make it synchronous
        success: function(json){
            data = JSON.stringify(json)
        }
    });
    return data;
}
