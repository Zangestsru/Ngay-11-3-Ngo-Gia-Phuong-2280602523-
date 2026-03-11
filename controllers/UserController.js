const UserService = require('../services/UserService');

class UserController {
    async getAll(req, res) {
        try {
            const users = await UserService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const user = await UserService.getUserById(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            const status = error.message === 'User not found' ? 404 : 500;
            res.status(status).json({ error: error.message });
        }
    }

    async create(req, res) {
        try {
            const user = await UserService.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const user = await UserService.updateUser(req.params.id, req.body);
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const user = await UserService.deleteUser(req.params.id);
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.status(200).json({ message: 'User soft deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async enable(req, res) {
        try {
            const { email, username } = req.body;
            const user = await UserService.changeStatus(email, username, true);
            res.status(200).json({ message: 'User enabled successfully', user });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async disable(req, res) {
        try {
            const { email, username } = req.body;
            const user = await UserService.changeStatus(email, username, false);
            res.status(200).json({ message: 'User disabled successfully', user });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getUsersByRole(req, res) {
        try {
            const users = await UserService.getUsersByRole(req.params.id);
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new UserController();
