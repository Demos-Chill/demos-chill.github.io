const hoverLink = document.querySelector('.hover-link');
const hoverImage = document.querySelector('.hover-image');

hoverLink.addEventListener('mouseover', () => {
  hoverImage.style.display = 'block';
});

hoverLink.addEventListener('mouseout', () => {
  hoverImage.style.display = 'none';
});
