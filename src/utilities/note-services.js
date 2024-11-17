import * as noteApi from './note-api';

export async function getNotes() {
    try {
        const notes = await noteApi.noteCollection();
        return notes;
    } catch (error) {
        console.error("Error fetching notes:", error);
        
    };
};

export async function addNotes(data, user) {
    try {
        console.log(user)
        const note_to_add = await noteApi.createNotes(data, user);
        return note_to_add;
    } catch (error) {
        return error;
    };
};