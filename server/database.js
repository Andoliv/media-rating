const mongoose = require('mongoose');

const URI = 'mongodb://localhost/media-rating';

mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));

module.exports = mongoose;