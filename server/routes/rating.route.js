const express = require('express');
const router = express.Router();

const rating = require('../controllers/rating.controller');

// Ratings API
router.get('/', rating.getRatings);
router.post('/', rating.createRating);
router.get('/:id', rating.getRating);
router.put('/:id', rating.editRating);
router.delete('/:id', rating.deleteRating);




module.exports = router;