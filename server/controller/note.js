const Note = require("./../models/note");

const getAllNotes = async (request, response) => {
    Note.find({}, (err, notes) => {
        if (err) {
            response.status(500).send(err);
        } else {
            response.status(200).send(notes);
        }
    }).sort({ createdAt: -1 });
}
const createNote = async (request, response) => {
    const note = new Note(request.body);
    await note.save((err, note) => {
        if (err) {
            response.status(500).send(err);
        } else {
            response.status(200).json(note);
        }
    }).sort({ createdAt: -1 });
}

const updateNote = async (request, response) => {
    await Note.findByIdAndUpdate(request.params.id, request.body, { new: true }, (err, note) => {
        if (err) {
            response.status(500).send(err);
        } else {
            response.status(200).json(note);
        }
    }).sort({ createdAt: -1 });
}

const deleteNote = async (request, response) => {
    await Note.findByIdAndDelete(request.params.id, (err, note) => {
        if (err) {
            response.status(500).send(err);
        } else {
            response.status(200).json(note);
        }
    }).sort({ createdAt: -1 });
}

module.exports = { getAllNotes, createNote, updateNote, deleteNote };
