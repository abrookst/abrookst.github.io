function handleClick(val) {
    const v = document.getElementById("resumePDF")
    console.log(val);
    if(val == "Graphics"){
        v.innerHTML = `
          <object data="./files/Graphics Resume.pdf" id="pdfObj">
          <p>ERROR: PDF viewing not supported in your browser.</p>
          <u><p><a href="./files/Graphics Resume.pdf">Click Here To Download Instead!</a></p></u>
          </object>`
    }
    else {
        v.innerHTML = `
          <object data="./files/Gameplay Resume.pdf" id="pdfObj">
          <p>ERROR: PDF viewing not supported in your browser.</p>
          <u><p><a href="./files/Gameplay Resume.pdf">Click Here To Download Instead!</a></p></u>
          </object>`
    }
}