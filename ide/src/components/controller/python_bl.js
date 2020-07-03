
const pythonConsoleRun = async (code)=>{
    // await window.languagePluginLoader
    try {
        console.log("<<<<< Python Output >>>>>")
        // await window.pyodide.loadPackage("numpy")
        let output = window.pyodide.runPythonAsync(code)
        console.log("<<<<< Python Output >>>>>")
        return [output,200]
    }
    catch (e) {
        // console.log(e)
        console.log("<<<<< Python Output >>>>>")
        // return [e,400]
    }

}

export default pythonConsoleRun;
