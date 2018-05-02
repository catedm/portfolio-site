$(document).ready(function(){
    $(".menu-button a").click(function(){
        $(".overlay").fadeToggle(200);
       $(this).toggleClass('btn-open').toggleClass('btn-close');
       $(".menu-button a").toggleClass("open");
    });
});
$('.overlay').on('click', function(){
    $(".overlay").fadeToggle(200);
    $(".menu-button a").toggleClass("open");
    open = false;
});

var modal = document.querySelector("#modal");
var modalOverlay = document.querySelector("#modal-overlay");
var closeButton = document.querySelector("#close-button");
var openButton = document.querySelector("#open-button");
var openButtonMobile = document.querySelector("#open-button-mobile");

closeButton.addEventListener("click", function() {
  modal.classList.toggle("open");
  modalOverlay.classList.toggle("open");
});

openButton.addEventListener("click", function() {
  modal.classList.toggle("open");
  modalOverlay.classList.toggle("open");
});

openButtonMobile.addEventListener("click", function() {
  modal.classList.toggle("open");
  modalOverlay.classList.toggle("open");
});
