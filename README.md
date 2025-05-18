# Airbnb Price Hider Bookmarklet

This bookmarklet hides prices on Airbnb's calendar view, making it easier to browse listings without being influenced by pricing.

## Setup

1. Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and replace `your_listing_id_here` with your Airbnb listing ID:

   ```
   AIRBNB_LISTING_ID=your_listing_id_here
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## How to Use the Bookmarklet

### In Chrome:

1. Right-click on your bookmarks bar
2. Select "Add new bookmark"
3. In the "Name" field, enter "Hide Airbnb Prices"
4. In the "URL" field, paste the entire contents of `hide-price.min.js` (the file already includes the `javascript:` prefix)
5. Click "Save"

### In Safari:

1. Click Bookmarks in the top menu
2. Select "Add Bookmark"
3. In the "Name" field, enter "Hide Airbnb Prices"
4. In the "Address" field, paste the entire contents of `hide-price.min.js` (the file already includes the `javascript:` prefix)
5. Click "Add"

## How to Use

1. Navigate to any Airbnb calendar page
2. Click the "Hide Airbnb Prices" bookmarklet in your bookmarks bar
3. The prices will be hidden from view

## Development and Maintenance

### Prerequisites

- Node.js installed on your computer
- npm (comes with Node.js)

### How to Minify the Code

1. Make your changes to `hide-price.js`
2. Open a terminal in the project directory
3. Run the following commands:
   ```bash
   npm install    # Only needed the first time
   npm run minify # This will create hide-price.min.js with the javascript: prefix
   ```
4. Use the contents of `hide-price.min.js` as your bookmarklet

### Important Notes

- Always use the minified version (`hide-price.min.js`) as your bookmarklet
- The unminified version (`hide-price.js`) is for development purposes only
- After making any changes to `hide-price.js`, remember to run the minification process and update your bookmarklet with the new minified code
- The minified file already includes the `javascript:` prefix, so you don't need to add it manually
- Make sure to keep your `.env` file secure and never commit it to version control
