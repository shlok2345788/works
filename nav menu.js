const navigation = document.querySelector('.navigation');
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

const menuItems = navigation.querySelectorAll('a');

for (let menuItem of menuItems) {
  menuItem.addEventListener('mouseover', function() {
    this.classList.add('active');
  });

  menuItem.addEventListener('mouseout', function() {
    this.classList.remove('active');
  });
}
