const express = require('express');

const router = express.Router();


// get /api/helloworld/
router.get('/', (req, res) => {
  res.send('GET response');
});

// post /api/helloworld/
router.post('/', (req, res) => {
  res.send('POST response');
});

// put /api/helloworld/
router.put('/', (req, res) => {
  res.send('PUT response');
});

// delete /api/helloworld/
router.delete('/', (req, res) => {
  res.send('DELETE response');
});

module.exports = router;
