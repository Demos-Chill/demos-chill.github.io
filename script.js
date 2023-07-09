const eventHeadings = document.querySelectorAll('.event-heading');

const imageUrlsByHeading = {
  "Demos from event 1": [
    "https://pbs.twimg.com/media/Ft692fuaYAAuIWD?format=jpg",
    "https://pbs.twimg.com/media/FouazKfakAI6wuV?format=jpg",
    "https://pbs.twimg.com/media/Ft694jMaYAA47k6?format=jpg",
    "https://pbs.twimg.com/media/Ft697J6XwAcbU6n?format=jpg"
  ],
  "Demos from event 2": [
    "https://pbs.twimg.com/media/Ft69ztLaMAAKwPv?format=jpg",
    "https://pbs.twimg.com/media/Ft69zKOaUAAS7dW?format=jpg",
    "https://pbs.twimg.com/media/Ft690LMXwAMWil4?format=jpg",
    "https://pbs.twimg.com/media/Ft690snaIAAeRPK?format=jpg"
  ],
  "Demos from event 3": [
    "https://pbs.twimg.com/media/F0oX4efakAEMf5A?format=jpg",
    "https://pbs.twimg.com/media/F0oX4efacAE6ICv?format=jpg",
    "https://pbs.twimg.com/media/F0oX4eeaAAASwpD?format=jpg",
    "https://pbs.twimg.com/media/F0oX4eeacAAiyB5?format=jpg"
  ]
};

eventHeadings.forEach((eventHeading) => {
  const eventImage = eventHeading.querySelector('.event-image');
  const heading = eventHeading.getAttribute('data-heading');
  const imageUrls = imageUrlsByHeading[heading];

  let currentIndex = 0;
  let intervalId;

  eventHeading.addEventListener('mouseover', () => {
    eventImage.style.display = 'block';
    intervalId = setInterval(cycleImages, 1000); // Change image every 1 second (adjust the interval as needed)
  });

  eventHeading.addEventListener('mouseout', () => {
    eventImage.style.display = 'none';
    clearInterval(intervalId); // Stop the image cycling
  });

  function cycleImages() {
    eventImage.src = imageUrls[currentIndex];
    currentIndex = (currentIndex + 1) % imageUrls.length;
  }

  // Set initial image
  eventImage.src = imageUrls[0];
});
