export let getChromePath = (path) =>{
    if(window.chrome.extension){
        return "/ide_build/"+path
    }
    return path
}
