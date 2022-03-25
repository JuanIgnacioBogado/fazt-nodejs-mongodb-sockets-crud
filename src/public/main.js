import {
    loadNotes,
    onSelected
} from './sockets.js';

import {
    onHandleSubmit
} from './ui.js';

loadNotes();
onSelected();

const noteForm = document.querySelector('#noteForm');
noteForm.addEventListener('submit', onHandleSubmit);