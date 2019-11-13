const express = require('express');
const router = express.Router();
const CenimaController = require('../Controller/CenimaController')

router.get('/',CenimaController.getAllCenima);

router.post('/',CenimaController.postCenima);

router.put('/',CenimaController.putCenima);

router.delete('/',CenimaController.deletCenima);



module.exports = router;

