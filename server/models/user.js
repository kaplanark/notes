const mongose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongose.Schema({
    login: String,
    id: String,
    avatar_url: String,
    html_url: String,
    name: String,
    location: String,
    email: String,
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongose.model("User", UserSchema);