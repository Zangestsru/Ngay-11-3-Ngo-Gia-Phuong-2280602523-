const BaseRepository = require('./BaseRepository');
const User = require('../schemas/user');

class UserRepository extends BaseRepository {
    constructor() {
        super(User);
    }

    async findByEmailAndUsername(email, username) {
        return await this.model.findOne({ email, username, isDeleted: false });
    }

    async findByRole(roleId) {
        return await this.model.find({ role: roleId, isDeleted: false }).populate('role');
    }

    async updateStatus(id, status) {
        return await this.model.findByIdAndUpdate(id, { status }, { new: true });
    }

    // Override getAll to populate role
    async getAll() {
        return await this.model.find({ isDeleted: false }).populate('role');
    }

    // Override getById to populate role
    async getById(id) {
        return await this.model.findOne({ _id: id, isDeleted: false }).populate('role');
    }
}

module.exports = new UserRepository();
