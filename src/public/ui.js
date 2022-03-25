import {
    deleteNote,
    saveNote,
    getNoteById,
    updateNote
} from './sockets.js';

const notesList = document.querySelector('#notes');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
let savedID = '';

const noteUI = note => {
    const div = document.createElement('div');
    div.classList = 'card card-body rounded-0 my-2 animate__animated animate__fadeInUp';
    div.innerHTML = `
        <div class="d-flex justify-content-between align-items-center">
            <h1>${note.title}</h1>
            <div>
                <button class="btn btn-danger btn-sm delete" data-id="${note._id}">Delete</button>
                <button class="btn btn-secondary btn-sm update" data-id="${note._id}">Update</button>
            </div>
        </div>
        <p>${note.description}</p>
    `;

    const btnDelete = div.querySelector('.delete');
    btnDelete.addEventListener('click', () => deleteNote(btnDelete.dataset.id));

    const btnUpdate = div.querySelector('.update');
    btnUpdate.addEventListener('click', () => getNoteById(btnUpdate.dataset.id));

    notesList.append(div);
};

export const renderNotes = notes => {
    notesList.innerHTML = '';
    notes.forEach(noteUI);
};

export const fillForm = note => {
    savedID = note._id;
    title.value = note.title;
    description.value = note.description;
};

export const onHandleSubmit = e => {
    e.preventDefault();

    if (!title.value) return;
    if (savedID) {
        updateNote(savedID, title.value, description.value);
    } else {
        saveNote(title.value, description.value);
    }

    title.value = '';
    description.value = '';
    savedID = '';
    title.focus();
};