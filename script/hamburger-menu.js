//funzione che viene usata su smartphone dopo che l'utente preme sull'icon bar per aprire il menu a tendina
$(document).ready(function () { //serve a dire dopo che viene caricato tutto
  $(".hamburger-menu").click(function (e) {
    $(".nav-list").toggleClass('is-open')
    e.preventDefault();//permette di non far ricaricare la pagine dopo il click
  })
})