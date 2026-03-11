const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// CRUD
router.get('/', (req, res) => UserController.getAll(req, res));
router.get('/:id', (req, res) => UserController.getById(req, res));
router.post('/', (req, res) => UserController.create(req, res));
router.put('/:id', (req, res) => UserController.update(req, res));
router.delete('/:id', (req, res) => UserController.delete(req, res));

// Special functions
router.post('/enable', (req, res) => UserController.enable(req, res));
router.post('/disable', (req, res) => UserController.disable(req, res));

module.exports = router;
