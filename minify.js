const { minify } = require('terser');
const fs = require('fs').promises;

async function minifyFile() {
  try {
    // Read the source file
    const source = await fs.readFile('hide-price.js', 'utf8');

    // Minify the code
    const result = await minify(source, {
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

    // Ensure the output is on a single line, remove the ! prefix if it exists, and ensure javascript: prefix
    const minifiedCode = 'javascript:' + result.code;
    await fs.writeFile('hide-price.min.js', minifiedCode);
    console.log('Successfully minified hide-price.js to hide-price.min.js');
  } catch (error) {
    console.error('Error during minification:', error);
  }
}

minifyFile();
