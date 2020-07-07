
const pythonConsoleRun = async (code)=>{
    console.log("<<<<< Python Output >>>>>")

    await window.pyodide.runPythonAsync("for element in dir():\n" +
        "    if element[0:2] != \"__\":\n" +
        "        del globals()[element]\n" +
        "\n" +
        "del element\n"
    )

    let output = await window.pyodide.runPythonAsync(code)
    parseOutput(output)
    console.log("<<<<< Python Output >>>>>")
}

function parseOutput(outputObj) {
    if (typeof outputObj === "function"){
        console.log("<Function>")
    }
    if (typeof outputObj === "object"){
        var out_str=""
        var depth = 0
        function spacing(depth) {
            return " ".repeat(depth*4)
        }
        function recursive_print_obj(obj , depth){
            Object.keys(obj).map((k) =>{
                out_str += `${spacing(depth)}${k}:\n`
                if (typeof obj[k] === "object"){
                    recursive_print_obj(obj[k],depth+1)

                }
                else {
                    out_str+=`${spacing(depth+1)} ${obj[k]}`
                }
            })
        }
        recursive_print_obj(outputObj,depth)
        console.log(out_str);
    }
}

export default pythonConsoleRun;
