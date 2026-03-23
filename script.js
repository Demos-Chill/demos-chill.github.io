/* ===================================
   EVENT IMAGE GALLERY
   =================================== */

/**
 * Cycles through images for each event heading on hover.
 * Only events with configured image URLs will display images.
 */

const eventHeadings = document.querySelectorAll('.event-heading');

// TODO: Add image URLs for events 5-14
// Example format:
// "Demos from event 5": [
//   "https://example.com/image1.jpg",
//   "https://example.com/image2.jpg"
// ],
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
  ],
  "Demos from event 4": [
    "https://pbs.twimg.com/media/F1BAPB9aMAALyp_?format=jpg",
    "https://pbs.twimg.com/media/F1BAPB8aQAEt9uS?format=jpg",
    "https://pbs.twimg.com/media/F1Ajz91acAAcStM?format=jpg",
    "https://pbs.twimg.com/media/F0-F-tlaEAIGxw4?format=jpg"
  ],
  // TODO: Add images for events 5-14
  "Demos from event 5": [],
  "Demos from event 6": [],
  "Demos from event 7": [],
  "Demos from event 8": [],
  "Demos from event 9": [],
  "Demos from event 10": [],
  "Demos from event 11": [],
  "Demos from event 12": [],
  "Demos from event 13": [],
  "Demos from event 14": []
};

eventHeadings.forEach((eventHeading) => {
  const eventImage = eventHeading.querySelector('.event-image');
  const heading = eventHeading.getAttribute('data-heading');
  const imageUrls = imageUrlsByHeading[heading];

  // Error handling: Skip events without configured images
  if (!imageUrls || imageUrls.length === 0) {
    console.log(`No images configured for: ${heading}`);
    return;
  }

  let currentIndex = 0;
  let intervalId;

  eventHeading.addEventListener('mouseover', () => {
    eventImage.style.display = 'block';
    intervalId = setInterval(cycleImages, 1000); // Change image every 1 second
  });

  eventHeading.addEventListener('mouseout', () => {
    eventImage.style.display = 'none';
    clearInterval(intervalId);
  });

  function cycleImages() {
    eventImage.src = imageUrls[currentIndex];
    currentIndex = (currentIndex + 1) % imageUrls.length;
  }

  // Set initial image
  eventImage.src = imageUrls[0];
});

/* ===================================
   LAMP TOGGLE FUNCTIONALITY
   =================================== */

/**
 * Adds interactive toggle functionality to lamp elements.
 * Clicking or pressing Enter/Space on a lamp toggles its glow effect.
 */

const toggleableLamps = document.querySelectorAll('[can-toggle]');

toggleableLamps.forEach((lamp) => {
  // Make lamp keyboard accessible
  lamp.setAttribute('tabindex', '0');
  lamp.setAttribute('role', 'button');
  lamp.setAttribute('aria-pressed', 'false');
  lamp.setAttribute('aria-label', 'Toggle lamp glow');

  // Click handler
  lamp.addEventListener('click', () => {
    toggleLamp(lamp);
  });

  // Keyboard handler (Enter or Space)
  lamp.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Prevent page scroll on Space
      toggleLamp(lamp);
    }
  });
});

/**
 * Toggles the clicked state and ARIA attributes of a lamp element.
 * @param {HTMLElement} lamp - The lamp element to toggle
 */
function toggleLamp(lamp) {
  const isClicked = lamp.classList.toggle('clicked');
  lamp.setAttribute('aria-pressed', isClicked.toString());
}

/* ===================================
   SIGNUP FORM
   =================================== */

document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('bd-email').value;
  const msg = document.getElementById('signup-msg');
  const btn = e.target.querySelector('button');
  btn.disabled = true;
  btn.textContent = '...';
  try {
    const res = await fetch('https://buttondown.com/api/emails/embed-subscribe/yitong', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ email }),
      mode: 'no-cors',
    });
    msg.textContent = 'Check your email to confirm!';
    msg.hidden = false;
    e.target.querySelector('input').value = '';
  } catch {
    msg.textContent = 'Something went wrong, try again.';
    msg.hidden = false;
  }
  btn.disabled = false;
  btn.textContent = 'Subscribe';
});
