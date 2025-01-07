const photoContainer = document.querySelector(".photoContainer");
let hue = 0;

function changeBackgroundColor() {
  hue = (hue + 1) % 1000;
  photoContainer.style.backgroundColor = `hsl(${hue}, 100%, 90%)`;
}

setInterval(changeBackgroundColor, 100);
