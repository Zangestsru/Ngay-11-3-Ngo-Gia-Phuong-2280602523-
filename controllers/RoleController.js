const RoleService = require('../services/RoleService');

class RoleController {
    async getAll(req, res) {
        try {
            const roles = await RoleService.getAllRoles();
            res.status(200).json(roles);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const role = await RoleService.getRoleById(req.params.id);
            if (!role) return res.status(404).json({ message: 'Role not found' });
            res.status(200).json(role);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async create(req, res) {
        try {
            const role = await RoleService.createRole(req.body);
            res.status(201).json(role);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const role = await RoleService.updateRole(req.params.id, req.body);
            if (!role) return res.status(404).json({ message: 'Role not found' });
            res.status(200).json(role);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const role = await RoleService.deleteRole(req.params.id);
            if (!role) return res.status(404).json({ message: 'Role not found' });
            res.status(200).json({ message: 'Role soft deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new RoleController();
