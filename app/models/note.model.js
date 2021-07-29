const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);

class NModel {
    create = (note) => {
        console.log("note", note);
        const newNote = new Note({
            title: note.title || "Untitled Note",
            content: note.content
        });

        // Save Note in the db
        return newNote.save()
            .then(data => {
                return data;
            }).catch(err => {
                console.log(err);
                let message = err.message || "Error occurred while creating the Note.";
                throw message;
            });
    }

    findAllNotes = () => {
        return Note.find()
            .then(notes => {
                return notes;
            }).catch(err => {
                let message = err.message || "Error occurred while retrieving all notes";
                throw message;
            });
    }

    findById = (noteId) => {
        return Note.findById(noteId)
            .then(note => {
                return note;
            }).catch(err => {
                let message = err.message || "Error occurred while finding a note by id";
                throw message;
            });
    }

    updateById = (noteId, note) => {
        return Note.findByIdAndUpdate(noteId, note, {
                new: true
            })
            .then(note => {
                return note;
            }).catch(err => {
                let message = err.message || "Error occurred while updating the note by id";
                throw message;
            });
    }

    deleteById = (noteId) => {
        return Note.findByIdAndRemove(noteId)
            .then(note => {
                return "Note deleted successfully!";
            }).catch(err => {
                let message = err.message || "Error occurred while deleting the note by id";
                throw message;
            });
    }
}
module.exports = new NModel();

