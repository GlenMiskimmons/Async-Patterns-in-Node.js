const express = require('express');
const fs = require('fs');
const datafile = 'server/data/clothing.json';
const router = express.Router();

/* GET all clothing */
router.route('/')
  .get(function(req, res) {
    getClothingData()
      .then(data => {
        console.log('Returning clothing data');
        res.send(data);
      })
      .catch(error => res.status(500).send(error))
      .finally(() => console.log('All done processing promise.'));
    
    console.log('Doing more work');
  });

function getClothingData() {

  return new Promise((resolve, reject) => {
    fs.readFile(datafile, 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        const clothingData = JSON.parse(data);
  
       resolve(clothingData);
      }
    });
  });
}

module.exports = router;
