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
  const text = "Things I've created";
  
  simulateTyping(terminal, text, 70);

 /********** Display On-Click **********/
document.getElementsByClassName("project-details")[0].style.display = 'none';
document.getElementsByClassName("project-details")[1].style.display = 'none';
document.getElementsByClassName("project-details")[2].style.display = 'none';
document.getElementsByClassName("project-details")[3].style.display = 'none';
document.getElementsByClassName("project-details")[4].style.display = 'none';
document.getElementsByClassName("project-details")[5].style.display = 'none';
document.getElementsByClassName("project-details")[6].style.display = 'none';
document.getElementsByClassName("project-details")[7].style.display = 'none';
function showDetails1() {
  var details = document.getElementsByClassName("project-details")[0];
  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
function showDetails2() {
  var details = document.getElementsByClassName("project-details")[1];
  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
function showDetails3() {
  var details = document.getElementsByClassName("project-details")[2];
  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
function showDetails4() {
  var details = document.getElementsByClassName("project-details")[3];
  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
function showDetails5() {
  var details = document.getElementsByClassName("project-details")[4];
  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
function showDetails6() {
  var details = document.getElementsByClassName("project-details")[5];
  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
function showDetails7() {
  var details = document.getElementsByClassName("project-details")[6];
  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
function showDetails8() {
  var details = document.getElementsByClassName("project-details")[7];
  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
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
    document.getElementById("projects").className = "classic";
    document.getElementById("typing-container").className = "classic";
    document.getElementById("disclaimer").className = "classic";
    document.getElementById("gallery").className = "classic";
    document.getElementById("next-link-container").className = "classic";
    /*document.getElementById("cat-gif").className = "classic";*/
    /*document.getElementById("resume").className = "classic";*/
    /*document.getElementById("description").className = "classic";*/
    /*document.getElementById("skills").className = "classic";*/
    /*document.getElementById("marquee").className = "classic";*/
    /*document.getElementById("experience").className = "classic";*/
    /*document.getElementById("construction").className = "classic";*/
    document.getElementById("city-skyline").className = "classic";
    document.getElementById("copyright").className = "classic";

    localStorage.setItem("isClassicMode", true);
  } else {
    document.body.className = "";
    document.getElementById("navbar").className = "";
    document.getElementById("site-name").className = "";
    document.getElementById("smudge").className = "";
    document.getElementById("projects").className = "";
    document.getElementById("typing-container").className = "";
    document.getElementById("disclaimer").className = "";
    document.getElementById("gallery").className = "";
    document.getElementById("next-link-container").className = "";
    /*document.getElementById("cat-gif").className = "";*/
    /*document.getElementById("resume").className = "";*/
    /*document.getElementById("description").className = "";*/
    /*document.getElementById("skills").className = "";*/
    /*document.getElementById("marquee").className = "";*/
    /*document.getElementById("experience").className = "";*/
    /*document.getElementById("construction").className = "";*/
    document.getElementById("city-skyline").className = "";
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
  document.getElementById("projects").className = "classic";
  document.getElementById("typing-container").className = "classic";
  document.getElementById("disclaimer").className = "classic";
  document.getElementById("gallery").className = "classic";
  document.getElementById("next-link-container").className = "classic";
  /*document.getElementById("cat-gif").className = "classic";*/
  /*document.getElementById("resume").className = "classic";*/
  /*document.getElementById("description").className = "classic";*/
  /*document.getElementById("skills").className = "classic";*/
  /*document.getElementById("marquee").className = "classic";*/
  /*document.getElementById("experience").className = "classic";*/
  /*document.getElementById("construction").className = "classic";*/
  document.getElementById("city-skyline").className = "classic";
  document.getElementById("copyright").className = "classic";
  checkbox.checked = true;
}