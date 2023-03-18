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
  const text = "More about me ...";
  
  simulateTyping(terminal, text, 70);

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
    document.getElementById("profile-wrap").className = "classic";
    document.getElementById("avatar").className = "classic";
    document.getElementById("description").className = "classic";
    document.getElementById("next-link-container").className = "classic";
    document.getElementById("copyright").className = "classic";

    localStorage.setItem("isClassicMode", true);
  } else {
    document.body.className = "";
    document.getElementById("navbar").className = "";
    document.getElementById("site-name").className = "";
    document.getElementById("smudge").className = "";
    document.getElementById("hero").className = "";
    document.getElementById("typing-container").className = "";
    document.getElementById("profile-wrap").className = "";
    document.getElementById("avatar").className = "";
    document.getElementById("description").className = "";
    document.getElementById("next-link-container").className = "";
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
  document.getElementById("profile-wrap").className = "classic";
  document.getElementById("avatar").className = "classic";
  document.getElementById("description").className = "classic";
  document.getElementById("next-link-container").className = "classic";
  document.getElementById("copyright").className = "classic";
  checkbox.checked = true;
}