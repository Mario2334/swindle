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

class Helpers {
    constructor() {
        this.get = {
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
                window.eval(data)
                // generate_hash(data)
                // let script = document.createElement('script');
                // script.type = 'text/javascript';
                // script.text= data
                // document.body.appendChild(script);
            }
        }
    }
    output_element(tag){
        let parent = document.getElementById("l-output");
        var node = document.createElement(tag);
        node.setAttribute("class", "output-line");
        parent.appendChild(node);
        return node
    }
    output_container(){
        return document.getElementById("output-div")
    }
    add_css(cssData) {
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href='data:text/css;charset=utf-8,' + escape(cssData);
        document.getElementsByTagName('head')[0].appendChild(link);
    }


    addHtml(htmlData) {
        let nodes = window.$.parseHTML(htmlData);
        window.$("#l-output").append(nodes)
    }
}
export default Helpers
