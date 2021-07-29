const NModel = require('../models/note.model.js');

class Service {
    create = (note) => {
        return new Promise(function (resolve, reject) {
            try {
                NModel.create(note).then(note => {
                        resolve(note);
                    })
                    .catch(err => {
                        let message = err.message || "Error while creating the new note";
                        reject(message);
                    });
            } catch (err) {
                let message = err.message || "Error while creating the new note";
                reject(message);
            }
        });
    }

    findAllNotes = () => {
        return new Promise(function (resolve, reject) {
            try {
                NModel.findAllNotes().then(notes => {
                        resolve(notes);
                    })
                    .catch(err => {
                        let message = err.message || "Error occurred while retrieving all notes";
                        reject(message);
                    });

            } catch (err) {
                let message = err.message || "Error occurred while retrieving all notes";
                reject(message);
            }
        });
    }

    findById = (noteId) => {
        return new Promise(function (resolve, reject) {
            try {
                NModel.findById(noteId).then(note => {
                        resolve(note);
                    })
                    .catch(err => {
                        let message = err.message || "Error occurred while finding a note by id";
                        reject(message);
                    });
            } catch (err) {
                let message = err.message || "Error occurred while finding a note by id";
                reject(message);
            }
        });
    }

    updateById = (noteId, note) => {
        return new Promise(function (resolve, reject) {
            try {
                NModel.updateById(noteId, note).then(note => {
                        resolve(note);
                    })
                    .catch(err => {
                        let message = err.message || "Error occurred while updating the note by id";
                        reject(message);
                    });
            } catch (err) {
                let message = err.message || "Error occurred while updating the note by id";
                reject(message);
            }
        });
    }

    deleteById = (noteId) => {
        return new Promise(function (resolve, reject) {
            try {
                NModel.deleteById(noteId).then(msg => {
                        resolve(msg);
                    })
                    .catch(err => {
                        let message = err.message || "Error occurred while deleting the note by id";
                        reject(message);
                    });
            } catch (err) {
                let message = err.message || "Error occurred while deleting the note by id";
                reject(message);
            }
        });
    }
}
module.exports = new Service();