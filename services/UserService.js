const UserRepository = require('../repositories/UserRepository');

class UserService {
    async getAllUsers() {
        return await UserRepository.getAll();
    }

    async getUserById(id) {
        const user = await UserRepository.getById(id);
        if (!user) throw new Error('User not found');
        return user;
    }

    async createUser(userData) {
        return await UserRepository.create(userData);
    }

    async updateUser(id, userData) {
        return await UserRepository.update(id, userData);
    }

    async deleteUser(id) {
        return await UserRepository.softDelete(id);
    }

    async changeStatus(email, username, newStatus) {
        const user = await UserRepository.findByEmailAndUsername(email, username);
        if (!user) {
            throw new Error('User not found or information is incorrect');
        }
        return await UserRepository.updateStatus(user._id, newStatus);
    }

    async getUsersByRole(roleId) {
        return await UserRepository.findByRole(roleId);
    }
}

module.exports = new UserService();
