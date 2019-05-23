var PDFDocument, doc;
var fs = require('fs');
PDFDocument = require('pdfkit');
doc = new PDFDocument;
doc.pipe(fs.createWriteStream('output.pdf'));

// Set a title and pass the X and Y coordinates
doc.fontSize(15).text('Wally Gator !', 50, 50);
// Set the paragraph width and align direction
doc.text('efueifeiojfnjabdioqd', {
    width: 410,
    align: 'left'
});


doc.end();
