function funcScroll() {
  var reveals = document.querySelectorAll(".reveal"); //qua immagazzina tutti i pragrafi con la classe reveal 
  var elementVisible = 5 //la distanza in cui i paragrafi dovrebbero aggiungere una classe
  var windowHeight = window.innerHeight; //l'altezza in cui l'utente si trova

  for (var i = 0; i < reveals.length; i++) {
    var elementTop = reveals[i].getBoundingClientRect().top; //la distanza di ogni paragrafo rispetto all'utente

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
  var slogan__gradient = document.getElementById("slogan__gradient");
  var slogan__text = document.getElementById("slogan");
  var slogan__gradientTop = (-slogan__text.getBoundingClientRect().top - 540) / (1400 / window.innerWidth);
  var nav = document.getElementById("nav");
  var circle = document.getElementById("nav__circle");
  var name = document.getElementById("nav__circle__logo__name");
  slogan__gradient.style.transform = "matrix(1, 0, 0, 1, 0," + slogan__gradientTop + ")";
  if (slogan__gradientTop > -1200) {
    if (slogan__gradientTop > -600) {
      slogan__text.style.position = "relative";
    }
    nav.classList.add("animated");
    nav.classList.add("slideInDown");
    nav.classList.remove("slideOutUp");
    nav.style.display = "block";
    circle.style.backgroundColor = "#eeeeee00";
    name.style.width = "10.3vw";
    $(".animapulse").addClass('animated pulse');
    $(".animapulse").removeClass('animapulse');
  } else {
    nav.classList.add("animated");
    nav.classList.remove("slideInDown");
    nav.classList.add("slideOutUp");
    $(".pulse").addClass('animapulse');
    $(".animapulse").removeClass('animated pulse');
    circle.style.backgroundColor = "#fff";
    name.style.width = "";
  }

}

window.addEventListener("scroll", funcScroll);
funcScroll();