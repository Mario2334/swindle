
const pythonConsoleRun = async (code)=>{
    // await window.languagePluginLoader
    console.log("<<<<< Python Output >>>>>")
    // await window.pyodide.loadPackage("numpy")
    let output = await window.pyodide.runPythonAsync(code)
    console.log(output)
    console.log("<<<<< Python Output >>>>>")

}

export default pythonConsoleRun;
