 /*====================== SELECCIONAMOS LAS CLASES O ID A UTILIZAR =========================*/
const header = document.querySelector("header");
const menu = document.querySelector(".menu");
const OpMenu = document.querySelectorAll(".opmenu");
const btnMenu = document.querySelector(".iconMenu");
const scrollUp = document.querySelector(".fa-arrow-up");

/*====================== METODO PARA MOSTAR O OCULTAR ==================================================*/ 
document.addEventListener("scroll", function () {
  
   /*====================== MUESTRA O OCULTA LA NAVEGACION =========================*/
  if (scrollY >= 10) header.classList.add("scrollActive");
  else header.classList.remove("scrollActive");

  /*====================== MUESTRA O OCULTA EL BOTON DEL SCROLL =========================*/
  if (scrollY >= 200) scrollUp.classList.add("BtUptActive");
  else scrollUp.classList.remove("BtUptActive");
});

/*====================== METODO PARA HACER SCROLL AN INICO DE PA PAGE ==================================================*/ 
scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})

/*====================== METODO PARA OCULTAR O MOSTRAR EL MENU ==================================================*/ 
btnMenu.addEventListener("click", function () {
  menu.classList.toggle("menuActive");
});

/*====================== METODO PARA OCULTAR EL MENU AL SELECIONAR UNA OPCION ==================================================*/ 
for(let item of OpMenu) 
{
  item.addEventListener("click", function () {
    menu.classList.toggle("menuActive");
  });
}
  