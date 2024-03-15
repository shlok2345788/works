const thumbnails = document.querySelectorAll('.thumbnail');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal img');
const close = document.querySelector('.close');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = thumbnail.getAttribute('data-full-image');
  });
});

close.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});