import * as notesApi from './note-api';
import createNotes from './note-api';

export async function getNotes() {
    try {
        const notes = await notesApi.noteCollection();
        return notes;
    } catch (error) {
        console.error("Error fetching notes:", error);
        
    };
};

export async function addNotes(data) {
    try {
        const note_to_add = await createNotes(data);
        return note_to_add;
    } catch (error) {
        return error;
    };
};