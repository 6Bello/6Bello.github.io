function banner_next() {
  const oldBanner = document.getElementsByClassName("banner_visible");
  var number = oldBanner[0].id;
  oldBanner[0].classList.remove("banner_visible");
  number = Number(number);
  if (number == 5) { number = 0; }
  var newBanner = document.getElementById(number + 1);
  newBanner.classList.add("banner_visible");
}
function banner_behind() {
  const oldBanner = document.getElementsByClassName("banner_visible");
  var number = oldBanner[0].id;
  oldBanner[0].classList.remove("banner_visible");
  number = Number(number);
  if (number == 1) { number = 6; }
  var newBanner = document.getElementById(number - 1);
  newBanner.classList.add("banner_visible");
}