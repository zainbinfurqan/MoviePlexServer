const express = require('express');
const router = express.Router();
const MovieController = require('../Controller/MovieController')



router.get('/',MovieController.getAllMovies);

router.post('/',MovieController.postMovie);

router.put('/',MovieController.putMovie);

router.delete('/',MovieController.deletMovie);

router.get('/:cenimaId',MovieController.getMovieByCenimaId);


module.exports = router;