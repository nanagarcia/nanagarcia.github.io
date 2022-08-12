$(document).ready(function(){
    
   $('.capitulos').hide()
   $('.d1').on('click',function(){
    $('.capitulos').slideToggle(800);
   });

    });


const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu_visible")

});