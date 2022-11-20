var slider = document.getElementById('slider');
function openSlide() {
  slider.classList.remove('-right-full');
  slider.classList.add('right-0');
  console.log('buka');
}
function closeSlide() {
  slider.classList.remove('right-0');
  slider.classList.add('-right-full');
}