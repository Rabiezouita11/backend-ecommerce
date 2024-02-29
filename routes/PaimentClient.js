var express = require('express');

var router = express.Router();
const Paiment = require('../controllers/Paiment/index').default;


router.post('/afficherPaiment', Paiment.createCharges); // http://localhost:8080/paiment/afficherPaiment









module.exports = router;
