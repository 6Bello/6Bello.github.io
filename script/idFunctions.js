function updateWidth() {
  viewport = document.querySelector("meta[name=viewport]");
  if (window.orientation == 90 || window.orientation == -90) {
    viewport.setAttribute(
      "content",
      "width=1401, initial-scale=0.34, maximum-scale=1.0, user-scalable=1"
    );
  } else {
    viewport.setAttribute(
      "content",
      "width=640, initial-scale=0.47, maximum-scale=1.0, user-scalable=1"
    );
  }
}

window.addEventListener("resize", updateGarmName);
function addId(id) {
  document.getElementById(id).classList.add("visible");
}

function remId(id) {
  document.getElementById(id).classList.remove("visible");
}
