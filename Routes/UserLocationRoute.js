const express = require('express');
const router = express.Router();

const UserLocationController = require('../Controller/UserLocationController')


router.post('/',UserLocationController.SaveUserLocation);


module.exports = router;
