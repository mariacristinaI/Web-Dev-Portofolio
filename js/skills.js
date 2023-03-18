function simulateTyping(element, text, delay) {
    let i = 0;
    const interval = setInterval(() => {
      if (i === text.length) {
        clearInterval(interval);
        return;
      }
      element.innerHTML += text[i];
      i++;
    }, delay);
  }
  
  const terminal = document.querySelector(".terminal");
  const text = " Current technical skills: ";
  
  simulateTyping(terminal, text, 70);

 /********** Display On-Click **********/
/* If the element with the id "xp-section" is not displayed, display it. If it is displayed, hide it.*/
document.getElementById("xp-section").style.display = 'none';
function display() {
  var list = document.getElementById("xp-section");
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
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
    document.getElementById("hero").className = "classic";
    document.getElementById("typing-container").className = "classic";
    document.getElementById("profile-wrap-skills").className = "classic";
    document.getElementById("skillbox").className = "classic";
    document.getElementById("next-link-container").className = "classic";
    document.getElementById("experience").className = "classic";
    document.getElementById("copyright").className = "classic";

    localStorage.setItem("isClassicMode", true);
  } else {
    document.body.className = "";
    document.getElementById("navbar").className = "";
    document.getElementById("site-name").className = "";
    document.getElementById("smudge").className = "";
    document.getElementById("hero").className = "";
    document.getElementById("typing-container").className = "";
    document.getElementById("profile-wrap-skills").className = "";
    document.getElementById("skillbox").className = "";
    document.getElementById("next-link-container").className = "";
    document.getElementById("experience").className = "";
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
  document.getElementById("hero").className = "classic";
  document.getElementById("typing-container").className = "classic";
  document.getElementById("profile-wrap-skills").className = "classic";
  document.getElementById("skillbox").className = "classic";
  document.getElementById("next-link-container").className = "classic";
  document.getElementById("experience").className = "classic";
  document.getElementById("copyright").className = "classic";
  checkbox.checked = true;
}