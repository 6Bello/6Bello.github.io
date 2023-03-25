//funzione che viene usata su smartphone dopo che l'utente preme sull'icon bar per aprire il menu a tendina
$(document).ready(function () { //serve a dire dopo che viene caricato tutto
  let ani = 0;
  $(".hamburger-menu").click(function (e) {
    const hamburger = document.getElementsByClassName("nav-list");
    console.log(hamburger[0].class);
    if (!ani) {
      hamburger[0].classList.add('is-open');
      hamburger[0].classList.add('animated');
      hamburger[0].classList.add('fadeInLeft');
      hamburger[0].classList.remove('fadeOutLeft');
      hamburger[0].style.zIndex="1";
      ani = 1;
    } else {
      hamburger[0].classList.remove('animated');
      hamburger[0].classList.remove('fadeInLeft'); hamburger[0].classList.add('animated'); hamburger[0].classList.add('FadeOutLeft');
      hamburger[0].classList.add('is-open');
      hamburger[0].style.zIndex="-1";
      ani = 0;
    }
    e.preventDefault();//permette di non far ricaricare la pagine dopo il click
  })
})