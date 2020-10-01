const fs = require('fs');
const chalk = require('chalk');

//! to add note to note.json
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote.length) {
        notes.push({ title: title, body: body });
        savedNotes(notes);
        console.log('Note added');
    } else {
        console.log('Note already exist');
    }
};

//! to remove note from note.json
const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notesToKeep.length === notes.length) {
        console.log(chalk.bgRed('Note not found!!!'));
    } else {
        console.log(chalk.bgGreen('Note removed!!!'));
        savedNotes(notesToKeep);
    }
};

const listNotes = () => {
    const notes = loadNotes();

    notes.forEach((note) => {
        console.log(note.title);
    });
};

//! to write data to the note.json
const savedNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

//! to read data from the note.json
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
};
