function fixPosition() {
  const nav = document.getElementsByName("nav");
  nav.classList.add = "fix-position";
}

window.onscroll = fixPosition();
