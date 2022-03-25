const socket = io();

import {
    renderNotes,
    fillForm
} from './ui.js';

export const loadNotes = () => {
    socket.on('server:loadnotes', renderNotes);
};

export const saveNote = (title, description) => {
    socket.emit('client:newnote', {title, description});
};

export const deleteNote = id => {
    socket.emit('client:deletenote', id);
};

export const getNoteById = id => {
    socket.emit('client:getnote', id);
};

export const onSelected = () => {
    socket.on('server:selectednote', fillForm);
};

export const updateNote = (id, title, description) => {
    socket.emit('client:updatenote', {id, title, description});
};