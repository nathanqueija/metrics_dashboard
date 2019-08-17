const express = require('express');
const router = express.Router();

const user = require('./db');

router.get('/:id', (req, res) => {
  try {
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({
      message: 'Some error occured',
      err
    });
  }
});

module.exports = router;
