let sliders = document.querySelectorAll(".slider");
let currentPosition = 0;

function activateSlider() {
  for (let index = 0; index < sliders.length; index++) {
    sliders[index].style.transform = `translateX(-${currentPosition}00%)`;
  }
  currentPosition++;
  if (currentPosition > sliders.length - 1) {
    currentPosition = 0;
  }
}
setInterval(() => {
  activateSlider();
}, 4000);
