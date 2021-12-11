const header = document.querySelector("header");
const menu = document.querySelector(".menu");
const OpMenu = document.querySelectorAll(".opmenu");
const btnMenu = document.querySelector(".iconMenu");
const BtWst = document.querySelector(".BtWst");

document.addEventListener("scroll", function () {
  if (scrollY >= 10) header.classList.add("scrollActive");
  else header.classList.remove("scrollActive");

  if (scrollY >= 200) BtWst.classList.add("BtWstActive");
  else BtWst.classList.remove("BtWstActive");
});

btnMenu.addEventListener("click", function () {
  menu.classList.toggle("menuActive");
});
for(let item of OpMenu) 
{
  item.addEventListener("click", function () {
    menu.classList.toggle("menuActive");
  });
}
  