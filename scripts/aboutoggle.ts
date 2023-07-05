const textModules = document.getElementsByClassName('text-module');
const textLines = document.getElementsByClassName('subdescrip');

function setModule(setting:string) {
    let txt : any;
    for (txt of textLines) {
        if (txt.id == setting) txt.style.display = 'block';
        else txt.style.display = 'none';
    }
}

textModules[1].querySelector(".abtcursor")?.classList.remove("hidden");
textModules[1].setAttribute("selected", "true");
setModule('default');

for (let index = 0; index < textModules.length; index++) {
    let mod = textModules[index];
    let other: Element;
    mod.addEventListener('click', () => {
        for (other of textModules) {
            other.setAttribute("selected", "false");
            other.querySelector(".abtcursor")?.classList.add("hidden");
        }
        mod.querySelector(".abtcursor")?.classList.remove("hidden");
        mod.setAttribute("selected", "true");
        setModule(mod.id.split('-')[0]);
    });
}