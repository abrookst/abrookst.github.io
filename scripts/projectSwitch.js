let active = null
function projectSwitch(img){
    active = document.getElementById("rightPortfolio")
    let iframe = document.getElementById("rightPortfolio");
    iframe.innerHTML = `<img src="`+img+`" style="max-height:100%; max-width:100%;">`

}