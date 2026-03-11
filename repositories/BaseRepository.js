class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async getAll() {
        return await this.model.find({ isDeleted: false });
    }

    async getById(id) {
        return await this.model.findOne({ _id: id, isDeleted: false });
    }

    async create(data) {
        const item = new this.model(data);
        return await item.save();
    }

    async update(id, data) {
        return await this.model.findOneAndUpdate(
            { _id: id, isDeleted: false },
            data,
            { new: true }
        );
    }

    async softDelete(id) {
        return await this.model.findOneAndUpdate(
            { _id: id, isDeleted: false },
            { isDeleted: true },
            { new: true }
        );
    }
}

module.exports = BaseRepository;
