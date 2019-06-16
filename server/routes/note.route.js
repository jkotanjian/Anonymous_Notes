const { NoteController } = require('../controllers');
const router = require('express').Router();

module.exports = router
    .get('/', NoteController.index)
    .post('/', NoteController.create);