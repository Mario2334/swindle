export let getChromePath = (path) =>{
    if(window.chrome.extension){
        return "/build/"+path
    }
    return path
}
