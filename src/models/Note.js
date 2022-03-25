import {Schema, model} from 'mongoose';

const NoteSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
}, {
    timestamps: true
});

export default model('Note', NoteSchema);