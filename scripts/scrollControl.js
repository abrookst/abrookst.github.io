
let activeButton = null
const aboutButton = document.getElementById("AboutButton");
const resumeButton = document.getElementById("ResumeButton");
const portfolioButton = document.getElementById("PortfolioButton");
const contactButton = document.getElementById("ContactButton");
const about = document.getElementById("About");
const resume = document.getElementById("Resume");
const portfolio = document.getElementById("Portfolio");
const contact = document.getElementById("Contact");
var limit = window.scrollMaxY || (document.documentElement.scrollHeight - document.documentElement.clientHeight)
addScrollListener()

addEventListener("resize", (event) => {
    console.log("resize")
    limit = window.scrollMaxY || (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    addScrollListener()
});

function scrolling() {
    console.log(window.scrollY)
    let selectedButton = null
    if (window.scrollY > (resume.offsetTop - resume.offsetHeight)) {
        if(activeButton == resumeButton) {return}
        selectedButton = resumeButton
    }
    else if (window.scrollY > (contact.offsetTop - contact.offsetHeight) ) {
        if(activeButton == contactButton) {return}
        selectedButton = contactButton
    }
    else if (window.scrollY > (portfolio.offsetTop - portfolio.offsetHeight)) {
        if(activeButton == portfolioButton) {return}
        selectedButton = portfolioButton
    }
    else if (window.scrollY > (about.offsetTop - about.offsetHeight)) {
        if(activeButton == aboutButton) {return}
        selectedButton = aboutButton
    }

    if(!selectedButton){
        if(!activeButton) {return}
        activeButton.id = ""
        activeButton = null
        return
    }
    if(selectedButton != activeButton){
        selectedButton.id = "selected"
        if(activeButton) { activeButton.id = "" }
        activeButton = selectedButton
    }
}

function addScrollListener(){
    console.log((resume.offsetTop - resume.offsetHeight), limit)
    if((resume.offsetTop - resume.offsetHeight) < limit){
        window.addEventListener("scroll", scrolling)
    }
    else{
        window.removeEventListener("scroll", scrolling)
    }
}

