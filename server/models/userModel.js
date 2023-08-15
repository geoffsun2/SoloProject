const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://geoffsun2:n2BXY4w4@soloproject.dr7w4n2.mongodb.net/'

mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'Users'
  })
    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true}
})

const User = mongoose.model('user', userSchema);

module.exports = User;