"use strict";
var _a;
const textModules = document.getElementsByClassName('text-module');
const textLines = document.getElementsByClassName('subdescrip');
function setModule(setting) {
    let txt;
    for (txt of textLines) {
        if (txt.id == setting)
            txt.style.display = 'block';
        else
            txt.style.display = 'none';
    }
}
(_a = textModules[1].querySelector(".abtcursor")) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
textModules[1].setAttribute("selected", "true");
setModule('default');
for (let index = 0; index < textModules.length; index++) {
    let mod = textModules[index];
    let other;
    mod.addEventListener('click', () => {
        var _a, _b;
        for (other of textModules) {
            other.setAttribute("selected", "false");
            (_a = other.querySelector(".abtcursor")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
        }
        (_b = mod.querySelector(".abtcursor")) === null || _b === void 0 ? void 0 : _b.classList.remove("hidden");
        mod.setAttribute("selected", "true");
        setModule(mod.id.split('-')[0]);
    });
}
//# sourceMappingURL=aboutoggle.js.map