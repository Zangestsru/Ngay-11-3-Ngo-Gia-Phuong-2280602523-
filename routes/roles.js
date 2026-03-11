const express = require('express');
const router = express.Router();
const RoleController = require('../controllers/RoleController');

const UserController = require('../controllers/UserController');

router.get('/', (req, res) => RoleController.getAll(req, res));
router.get('/:id', (req, res) => RoleController.getById(req, res));
router.get('/:id/users', (req, res) => UserController.getUsersByRole(req, res));
router.post('/', (req, res) => RoleController.create(req, res));
router.put('/:id', (req, res) => RoleController.update(req, res));
router.delete('/:id', (req, res) => RoleController.delete(req, res));


module.exports = router;
