const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/posts', meController.mePosts);
router.get('/saved', meController.meSaved);
// router.get('/:slug', meController.show);

module.exports = router;
