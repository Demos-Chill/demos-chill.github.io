const hoverLink = document.querySelector('.hover-link');
const hoverImage = document.querySelector('.hover-image');

const imageUrls = [
  "https://pbs.twimg.com/media/Ft69ztLaMAAKwPv?format=jpg",
  "https://pbs.twimg.com/media/F0YTB08aQAAzi6X?format=jpg",
  "https://pbs.twimg.com/media/F0YS4-IaMAAmOUq?format=jpg",
  "https://pbs.twimg.com/media/F0YS91nakAA3Vy2?format=jpg"
];
let currentIndex = 0;
let intervalId;

hoverLink.addEventListener('mouseover', () => {
  hoverImage.style.display = 'block';
  intervalId = setInterval(cycleImages, 1000); // Change image every 1 second (adjust the interval as needed)
});

hoverLink.addEventListener('mouseout', () => {
  hoverImage.style.display = 'none';
  clearInterval(intervalId); // Stop the image cycling
});

function cycleImages() {
  hoverImage.src = imageUrls[currentIndex];
  currentIndex = (currentIndex + 1) % imageUrls.length;
}

// Set initial image
hoverImage.src = imageUrls[0];
