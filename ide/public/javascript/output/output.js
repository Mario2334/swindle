function output_element(tag){
    let parent = document.getElementById("l-output");
    var node = document.createElement(tag);
    node.setAttribute("class", "output-line");
    parent.appendChild(node);
    return node
}

function output_container(){
    return document.getElementById("output-div")
}

var get ={
    json : function (url) {
        var data = null;
        //todo send type as well
        window.$.get({
            url: url,// mandatory
            async:false, // to make it synchronous
            success: function(json){
                data = JSON.stringify(json)
            }
        });
        return data;
    },
    data:function (url) {
        var data = null;
        //todo send type as well
        window.$.get({
            url: url,// mandatory
            async:false, // to make it synchronous
            success: function(json){
                data = json;
            }
        });
        return data;
    },
    css:function (url) {
        let cssData = fetch_data(url)
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href='data:text/css;charset=utf-8,' + escape(cssData);
        document.getElementsByTagName('head')[0].appendChild(link);
    },
    js:function (url) {
        let data = fetch_data(url)
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.text= data
        script.nonce = "nonce-Nc3n83cnSAd3wc3Sasdfn939hc3"
        document.body.appendChild(script);
    }
}

function fetch_data(url,type=null){
    var data = null;
    //todo send type as well
    window.$.get({
        url: url,// mandatory
        async:false, // to make it synchronous
        success: function(json){
            data = json;
        }
    });
    return data
}


function add_css(cssData) {
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href='data:text/css;charset=utf-8,' + escape(cssData);
    document.getElementsByTagName('head')[0].appendChild(link);
}

function addHtml(htmlData) {
    // function checkHtml(html) {
    //     var doc = document.createElement('div');
    //     doc.innerHTML = html;
    //     if(doc.innerHTML === html){
    //         return doc
    //     }
    //     else {
    //         new Error("Invalid Html")
    //     }
    // }
    // var output = document.getElementById("l-output")
    // let node = checkHtml(htmlData)
    // output.appendChild(node)
    // htmlData = htmlData.trim("\n")
    let nodes = window.$.parseHTML(htmlData);
    window.$("#l-output").append(nodes)
}
