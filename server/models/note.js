const mongose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const NoteSchema = new mongose.Schema({
    img: String,
    title: String,
    text: String,
    color: String,
    categories: Array,
    show: Boolean,
    pinned: Boolean,
    archived: Boolean
});

NoteSchema.plugin(passportLocalMongoose);

module.exports = mongose.model("Note", NoteSchema);