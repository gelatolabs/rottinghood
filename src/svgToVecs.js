const fs = require('fs');
const cheerio = require('cheerio');
const { pathDataToPolys } = require('svg-path-to-polygons');

const [node, file, svgFileName] = process.argv;

if (!svgFileName) {
  console.error('Please provide an SVG file name as an argument.');
  process.exit(1);
}

// Read the SVG file
fs.readFile(svgFileName, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the SVG file:', err);
    return;
  }

  // Load the SVG data using Cheerio
  const $ = cheerio.load(data, { xmlMode: true });

  // Find the SVG element and extract the 'height' and 'width' attribute values
  const svgHeight = parseFloat($('svg').attr('height'));
  const svgWidth = parseFloat($('svg').attr('width'));

  // Find the path element and extract the 'd' attribute value
  const pathData = $('path').attr('d');

  if (pathData) {
    // Convert the path to points
    let points = pathDataToPolys(pathData, { tolerance: 1, decimals: 1 });

    // Round the points to the nearest integer and format for Kaboom
    points[0].forEach(point => {
      let x = Math.round(point[0] - (0.5 * svgWidth));
      let y = Math.round(point[1] - (0.5 * svgHeight));
      console.log(`vec2(${x}, ${y}),`);
    });
  } else {
    console.error('Path element or d attribute not found in the SVG file');
  }
});
