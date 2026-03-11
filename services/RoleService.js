const RoleRepository = require('../repositories/RoleRepository');

class RoleService {
    async getAllRoles() {
        return await RoleRepository.getAll();
    }

    async getRoleById(id) {
        return await RoleRepository.getById(id);
    }

    async createRole(roleData) {
        // Check if role name already exists
        const existing = await RoleRepository.getByName(roleData.name);
        if (existing) {
            throw new Error('Role with this name already exists');
        }
        return await RoleRepository.create(roleData);
    }

    async updateRole(id, roleData) {
        return await RoleRepository.update(id, roleData);
    }

    async deleteRole(id) {
        return await RoleRepository.softDelete(id);
    }
}

module.exports = new RoleService();
