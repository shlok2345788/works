var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0;
const interval = 3000;

function changeSlide(n) {
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].classList.remove('active');
    dots[i].classList.remove('active');
  }

  currentImg = (currentImg + 1) % imgs.length;

  if (n != undefined) {
    currentImg = n;
  }

  imgs[currentImg].classList.add('active');
  dots[currentImg].classList.add('active');
}

changeSlide();

setInterval(function() {
  changeSlide(currentImg + 1);
}, interval);