const express = require('express');
const router = express.Router();

const postController = require('../app/controllers/PostController');

router.get('/create', postController.create);
router.post('/store', postController.store);
router.post('/handle-form-action', postController.handleFormAction);
router.post('/trashed/handle-form-action', postController.handleTrashFormAction);
router.get('/:id/edit', postController.edit);
router.put('/:id', postController.save);
router.patch('/:id/restore', postController.restore);
router.delete('/:id', postController.delete);
router.delete('/:id/force', postController.forceDelete);
router.get('/:slug', postController.show);

module.exports = router;