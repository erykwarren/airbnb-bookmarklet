import { minify } from 'terser';
import { promises as fs } from 'fs';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

async function minifyFile() {
  try {
    // Read the source file
    const source = await fs.readFile('hide-price.js', 'utf8');

    // Check if listing ID is set
    if (!process.env.AIRBNB_LISTING_ID) {
      console.error('\nError: AIRBNB_LISTING_ID not set in .env file!');
      console.error('Please add your listing ID to the .env file:\n');
      console.error('AIRBNB_LISTING_ID=your_listing_id_here\n');
      process.exit(1);
    }

    // Replace the listing ID with the one from .env
    const sourceWithEnv = source.replace(
      /const LISTING_ID = '.*?'/,
      `const LISTING_ID = '${process.env.AIRBNB_LISTING_ID}'`
    );

    // Minify the code
    const result = await minify(sourceWithEnv, {
      compress: {
        drop_console: false, // Keep console.log statements
      },
      format: {
        comments: false, // Remove comments
        beautify: false, // Ensure single line output
      },
      parse: {
        // Allow function statements without names
        bare_returns: true,
      },
    });

    // Wrap the minified code in a bookmarklet format
    const minifiedCode = 'javascript:' + result.code;
    await fs.writeFile('hide-price.min.js', minifiedCode);
    console.log('Successfully minified hide-price.js to hide-price.min.js');
  } catch (error) {
    console.error('Error during minification:', error);
  }
}

minifyFile();
