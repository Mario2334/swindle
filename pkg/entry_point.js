function handleShown() {
    console.log("panel is being shown");
}

function handleHidden() {
    console.log("panel is being hidden");
}

chrome.devtools.panels.create(
    "Editor",           // title
    "ide_build/logo192.png",           // icon
    "ide_build/index.html"          // content
)
