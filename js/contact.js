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
  const text = "Contact me here";
  
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
    /*document.getElementById("cat-gif").className = "classic";*/
    /*document.getElementById("resume").className = "classic";*/
    /*document.getElementById("description").className = "classic";*/
    /*document.getElementById("skills").className = "classic";*/
    /*document.getElementById("marquee").className = "classic";*/
    /*document.getElementById("experience").className = "classic";*/
    /*document.getElementById("projects").className = "classic";*/
    /*document.getElementById("construction").className = "classic";*/
    document.getElementById("typing-container1").className = "classic";
    document.getElementById("contact").className = "classic";
    document.getElementById("social").className = "classic";
    document.getElementById("copyright").className = "classic";

    localStorage.setItem("isClassicMode", true);
  } else {
    document.body.className = "";
    document.getElementById("navbar").className = "";
    document.getElementById("site-name").className = "";
    document.getElementById("smudge").className = "";
    /*document.getElementById("cat-gif").className = "";*/
    /*document.getElementById("resume").className = "";*/
    /*document.getElementById("description").className = "";*/
    /*document.getElementById("skills").className = "";*/
    /*document.getElementById("marquee").className = "";*/
    /*document.getElementById("experience").className = "";*/
    /*document.getElementById("projects").className = "";*/
    /*document.getElementById("construction").className = "";*/
    document.getElementById("typing-container1").className = "";
    document.getElementById("contact").className = "";
    document.getElementById("social").className = "";
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
  /*document.getElementById("cat-gif").className = "classic";*/
  /*document.getElementById("resume").className = "classic";*/
  /*document.getElementById("description").className = "classic";*/
  /*document.getElementById("skills").className = "classic";*/
  /*document.getElementById("marquee").className = "classic";*/
  /*document.getElementById("experience").className = "classic";*/
  /*document.getElementById("projects").className = "classic";*/
  /*document.getElementById("construction").className = "classic";*/
  document.getElementById("typing-container1").className = "classic";
  document.getElementById("contact").className = "classic";
  document.getElementById("social").className = "classic";
  document.getElementById("copyright").className = "classic";
  checkbox.checked = true;
}