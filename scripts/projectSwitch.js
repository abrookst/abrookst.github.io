let active = null
function iframeSwitch(img){
    if(active){
        active.style.borderColor = "var(--color3)"
    }
    active = img
    
    let iframe = document.getElementById("projectIframe");
    iframe.src = "./projectFrames/"+img.id+".html"
    
    img.style.borderColor = "var(--color1)"


}