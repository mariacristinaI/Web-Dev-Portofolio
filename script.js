/********** TERMINAL **********/
/* A function that makes the text in the terminal appear as if it is being typed. */
var data = [
    {
      terminaltext: "<span>Hi there, I am Maria!<br/><br/> I am a <strong>Website Front-End Developer</strong> who loves building user-friendly websites and web apps. Specialized in HTML5, CSS3, Javascript and Content Management Systems. I am currently expanding my knowledge on web development technologies.<br><br> Welcome to my webpage!"
    }
  ];
  
  var allElements = document.getElementsByClassName("typing");
  for (var j = 0; j < allElements.length; j++) {
    var currentElementId = allElements[j].id;
    var currentElementIdContent = data[0][currentElementId];
    var element = document.getElementById(currentElementId);
    var me = currentElementIdContent;
  
    // type code
    var i = 0, isTag, text;
    (function type() {
      text = me.slice(0, ++i);
      if (text === me) return;
      element.innerHTML = text + `<span class='blinker'>&#32;</span>`;
      var char = text.slice(-1);
      if (char === "<") isTag = true;
      if (char === ">") isTag = false;
      if (isTag) return type();
      setTimeout(type, 60);
    })();
  }

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
let checkbox = document.getElementById("themeCheckbox");

checkbox.onchange = function(e) {
  console.log(e.target.checked);

  if(e.target.checked) {
    document.body.className = "classic";
    document.getElementById("navbar").className = "classic";
    document.getElementById("site-name").className = "classic";
    document.getElementById("smudge").className = "classic";
    document.getElementById("welcome-section").className = "classic";
    document.getElementById("resume").className = "classic";
    document.getElementById("description").className = "classic";
    document.getElementById("skills").className = "classic";
    document.getElementById("experience").className = "classic";
    document.getElementById("projects").className = "classic";
    document.getElementById("city-skyline").className = "classic";
    document.getElementById("contact").className = "classic";
    document.getElementById("social").className = "classic";
    document.getElementById("copyright").className = "classic";

    localStorage.setItem("isClassicMode", true);
  } else {
    document.body.className = "";
    document.getElementById("navbar").className = "";
    document.getElementById("site-name").className = "";
    document.getElementById("smudge").className = "";
    document.getElementById("welcome-section").className = "";
    document.getElementById("resume").className = "";
    document.getElementById("description").className = "";
    document.getElementById("skills").className = "";
    document.getElementById("experience").className = "";
    document.getElementById("projects").className = "";
    document.getElementById("city-skyline").className = "";
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
  document.getElementById("welcome-section").className = "classic";
  document.getElementById("resume").className = "classic";
  document.getElementById("description").className = "classic";
  document.getElementById("skills").className = "classic";
  document.getElementById("experience").className = "classic";
  document.getElementById("projects").className = "classic";
  document.getElementById("city-skyline").className = "classic";
  document.getElementById("contact").className = "classic";
  document.getElementById("social").className = "classic";
  document.getElementById("copyright").className = "classic";
  checkbox.checked = true;
}

/********** REGEX **********/
/* A regular expression that checks if the email and name are valid. */
  const emailRegex = /^[a-zA-Z0-9.-_]+@[a-zA-Z.-]+\.[a-z]{2,3}$/;
  const nameRegex = new RegExp('^[A-Z][a-z]+ ([A-Z]{1}\.? )?[A-Z][a-z]+(-[A-Z][a-z]+)?');

/********** TIME **********/
const today = new Date();
let currentYear = today.getFullYear();
document.getElementById("year").innerHTML = currentYear;