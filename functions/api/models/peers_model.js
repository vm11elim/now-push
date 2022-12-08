const database = require('../database');

// Here, we are implementing the class with Singleton design pattern

class PeerModel {
    constructor() {
        if (this.instance) return this.instance;
        PeerModel.instance = this;
    }

    get() { return database.getList('peers') }

    getById(id) { return database.get('peers', id) }

    create(peer) { return database.create('peers', peer) }

    delete(id) { return database.delete('peers', id) }

    update(id, peer) { return database.set('peers', id, peer) }
}

module.exports = new PeerModel();