/********** TERMINAL **********/
/* A function that makes the text in the terminal appear as if it is being typed. */
let data = [
    {
      terminaltext: " Welcome to my webpage!!"
    }
  ];
  
  let allElements = document.getElementsByClassName("typing");
  for (let j = 0; j < allElements.length; j++) {
    let currentElementId = allElements[j].id;
    let currentElementIdContent = data[0][currentElementId];
    let element = document.getElementById(currentElementId);
    let me = currentElementIdContent;
  
    // type code
    let i = 0, isTag, text;
    (function type() {
      text = me.slice(0, ++i);
      if (text === me) return;
      element.innerHTML = text + `<span class='blinker'>&#32;</span>`;
      let char = text.slice(-1);
      if (char === "<") isTag = true;
      if (char === ">") isTag = false;
      if (isTag) return type();
      setTimeout(type, 70);
    })();
  }

/********** MODE **********/
/* A function that changes the theme of the webpage. */
let checkbox = document.querySelector('input[type="checkbox"]');

checkbox.onchange = function(e) {
  console.log(e.target.checked);

  if(e.target.checked) {
    document.body.className = "classic";
    document.getElementById("navbar").className = "classic";
    document.getElementById("site-name").className = "classic";
    document.getElementById("smudge").className = "classic";
    document.getElementById("welcome-section").className = "classic";
    document.getElementById("greeting").className = "classic";
    document.getElementById("next-link-container").className = "classic";
    document.getElementById("terminal").className = "classic";
    document.getElementById("copyright").className = "classic";

    localStorage.setItem("isClassicMode", true);
  } else {
    document.body.className = "";
    document.getElementById("navbar").className = "";
    document.getElementById("site-name").className = "";
    document.getElementById("smudge").className = "";
    document.getElementById("welcome-section").className = "";
    document.getElementById("greeting").className = "";
    document.getElementById("next-link-container").className = "";
    document.getElementById("terminal").className = "";
    document.getElementById("copyright").className = "";
    localStorage.removeItem("isClassicMode");
  }
}

let classic = localStorage.getItem("isClassicMode");

if(classic) {
  document.body.className = "classic";
  document.getElementById("navbar").className = "classic";
  document.getElementById("site-name").className = "classic";
  document.getElementById("smudge").className = "classic";
  document.getElementById("welcome-section").className = "classic";
  document.getElementById("greeting").className = "classic";
  document.getElementById("next-link-container").className = "classic";
  document.getElementById("terminal").className = "classic";
  document.getElementById("copyright").className = "classic";
  checkbox.checked = true;
}