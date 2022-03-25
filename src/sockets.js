import Note from './models/Note';

export default io => {
    io.on('connect', socket => {
       
        const emitNotes = async () => {
            const notes = await Note.find();
            io.emit('server:loadnotes', notes);
        }
        emitNotes();

        socket.on('client:newnote', async data => {
            const newNote = new Note(data);
            await newNote.save();
            emitNotes();
        });

        socket.on('client:deletenote', async id => {
            await Note.findByIdAndDelete(id);
            emitNotes();
        });

        socket.on('client:getnote', async id => {
            const note = await Note.findById(id);
            socket.emit('server:selectednote', note);
        });

        socket.on('client:updatenote', async ({id, title, description}) => {
            await Note.findOneAndUpdate({_id: id}, {title, description});
            emitNotes();
        });
    });
};