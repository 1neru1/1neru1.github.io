var rootsel = document.querySelector(":root");

function darktheme() {
  rootsel.style.setProperty("--bg", "var(--black)");
  rootsel.style.setProperty("--text", "var(--white)");
  document.getElementById("picto-frame").style.filter =
    "invert(1) hue-rotate(180deg)";
  localStorage.setItem("theme", "dark");
}

function lighttheme() {
  rootsel.style.setProperty("--bg", "var(--white)");
  rootsel.style.setProperty("--text", "var(--black)");
  document.getElementById("picto-frame").style.filter = "none";
  localStorage.setItem("theme", "light");
}

if (localStorage.getItem("theme") == "dark") {
  darktheme();
}

if (localStorage.getItem("theme") == "light") {
  lighttheme();
}
