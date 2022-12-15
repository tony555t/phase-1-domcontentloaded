const p = document.getElementById("text");
const changeParagraphContent = function () {
  p.textContent = "This is really cool!";
};

document.addEventListener("DOMContentLoaded", changeParagraphContent);