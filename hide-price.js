javascript: (function () {
  // Configuration
  const LISTING_ID = 'YOUR_LISTING_ID'; // This will be replaced during minification

  // First navigate to the Airbnb calendar page
  // Replace the URL below with your specific Airbnb calendar URL
  if (!window.location.href.includes('airbnb.ca/multicalendar')) {
    const currentYear = new Date().getFullYear();
    window.location.href = `https://fr.airbnb.ca/multicalendar/${LISTING_ID}/year/${currentYear}`;
    // The script will stop here and continue after page load
    return;
  }

  // Price selector - using a more reliable structure-based selector
  const PRICE_SELECTOR = 'button[data-date] span[class*="atm_c8_1uc0753"]';

  // Check if our style element already exists
  let style = document.getElementById('airbnb-price-hider');
  const isHidden = style !== null;

  if (isHidden) {
    // If style exists, remove it to show prices
    style.remove();
    console.log('Airbnb prices shown!');
  } else {
    // If style doesn't exist, create it to hide prices
    style = document.createElement('style');
    style.id = 'airbnb-price-hider';
    style.textContent = `${PRICE_SELECTOR} { opacity: 0 !important; }`;
    document.head.appendChild(style);
    console.log('Airbnb prices hidden!');
  }
})();
