const express = require('express');
const artistController = require('../controllers/artist');
const loginController = require('../controllers/login');
const router = express.Router();


router.get('/login', loginController.loginForm);

router.post('/login', loginController.login);

router.get('/logout', artistController.logout);

router.get('/artists', artistController.getAllArtist);

router.post('/artists', artistController.searchArtist);

router.get('/artist/add', artistController.getAddArtist);

router.get('/artist/:id', artistController.getArtist);

router.post('/artist/add', artistController.postAddArtist);

router.post('/artist/:id', artistController.deleteArtist);

module.exports = router;
