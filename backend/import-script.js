const csv = require('csv-parser');  // You might need to install this package
const fs = require('fs');
const Sake = require('./models/sake');


const results = [];

fs.createReadStream('csvdata/kid2.csv')
  .pipe(csv())
  .on('data', (data) => {
    // split the spicy field into an array
    data.spicy = data.spicy.split(',');
    data.smell = data.smell.split(',');
    results.push(data);
  })
  .on('end', async () => {
    try {
      await Sake.insertMany(results);  // insert data into database
      console.log('Data imported successfully');
    } catch (err) {
      console.error('Error occurred:', err);
    }
  });
