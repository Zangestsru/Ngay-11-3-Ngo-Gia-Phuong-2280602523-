const BaseRepository = require('./BaseRepository');
const Role = require('../schemas/role');

class RoleRepository extends BaseRepository {
    constructor() {
        super(Role);
    }

    async getByName(name) {
        return await this.model.findOne({ name, isDeleted: false });
    }
}

module.exports = new RoleRepository();
