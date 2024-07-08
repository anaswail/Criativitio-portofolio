let menu = document.getElementById("menu");
let links = document.querySelector("ul");
let header = document.querySelector("header");
let btn = document.getElementById("up-arrow");

document.body.onscroll = function () {
  if (window.scrollY === 0) {
    header.style.backgroundColor = "transparent";
  } else {
    header.style.backgroundColor = "#151515";
  }
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
  // console.log(window.scrollY)
};
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

menu.onclick = function () {
  menu.classList.toggle("fa-times");
  links.classList.toggle("active");
};

function sendToWhatsApp(){
    let number = "+201050305754";
    let input = document.getElementById('nameInput').value;
    let email = document.getElementById('emailInput').value;
    let msg = document.getElementById('massage').value;

    var url = "https://wa.me/" +number+ "?text="
    + "Name: " +input+ "%0a"
    + "Email: " +email + "%0a"
    + "Massage: " +msg+ "%0a%0a";
    window.open(url, '_blank').focus();
}