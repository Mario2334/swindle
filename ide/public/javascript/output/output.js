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
    var data = null;

    $.get({
        url: url,// mandatory
        async:false, // to make it synchronous
        success: function(json){
            data = json
        }
    });
    return data;
}
