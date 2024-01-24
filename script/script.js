const div = document.getElementById('image-track');
let isDragging = false;
let offsetX = 0;

const onDown = e => {
  isDragging = true;
  offsetX = e.clientX - div.getBoundingClientRect().left;
}

const onUp = () => {
  isDragging = false;
}

const onMove = e => {
  if (isDragging) {
    const x = e.clientX - offsetX;

    // Imposta la posizione del div sulla posizione del mouse.
    if (x >= 148 || x<=-2000) return;
    else {
      div.style.left = x + "px";
    }
  }
}

// Aggiungi gestori di eventi
div.ontouchstart = e => onDown(e.touches[0]);
div.ontouchend = e => onUp(e.touches[0]);
div.ontouchmove = e => onMove(e.touches[0]);

// Aggiungi gestori di eventi per mouse
// Aggiungi gestori di eventi
window.addEventListener('mouseup', onUp);
div.addEventListener('mousedown', onDown);
window.addEventListener('mousemove', onMove);