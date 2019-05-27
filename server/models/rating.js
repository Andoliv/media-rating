const mongoose = require('mongoose');
const {Schema} = mongoose;
const { ObjectId } = mongoose.Schema.Types;
mongoose.set('useCreateIndex', true);

const RATING = {
    HIGHLY_RELEVANT: 'Highly Relevant',
    RELEVANT: 'Relevant',
    RELATED: 'Related',
    NOT_RELATED: 'Not Related',
    VDP: 'VDP',
    DETRIMENTAL: 'Detrimental',
    CANT_JUDGE: 'Can\'t Judge'
};

const RatingSchema = new Schema({
    query: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    url: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    rating: {
        type: String,
        required: true,
        trim: true
    },
    note: {
        type: String,
        required: false,
        trim: true
    }
});

RatingSchema.index({
    query: 'text',
    url: 'text',
    rating: 'text',
    note: 'text'
});

const Rating = mongoose.model('Rating', RatingSchema);
module.exports = Rating;
