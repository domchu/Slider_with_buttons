let sliders = document.querySelectorAll(".slider");
let leftBtn = document.querySelector(".left");
let rightBtn = document.querySelector(".right");
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
//the setinterval for the sliders
setInterval(() => {
  activateSlider();
}, 4000);

// the left button
leftBtn.addEventListener("click", () => {
  currentPosition = currentPosition -= 1;
  if (currentPosition < 1) {
    currentPosition = sliders.length;
  }
  for (let index = 0; index < sliders.length; index++) {
    sliders[index].style.transform = `translate(-${currentPosition - 1}00%)`;
  }
});

// the right button of the slider
rightBtn.addEventListener("click", () => {
  currentPosition = currentPosition += 1;
  if (currentPosition > sliders.length - 1) {
    currentPosition = 0;
  }
  for (let index = 0; index < sliders.length; index++) {
    sliders[index].style.transform = `translate(-${currentPosition}00%)`;
  }
});
