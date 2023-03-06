// sticky header start
window.onload = function () {
  var navbar = document.querySelector(".links-plus-header");
  var sticky = 200;
  window.addEventListener("scroll", function () {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
};
// sticky header end
