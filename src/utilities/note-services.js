import * as noteApi from './note-api';

export async function getNotes(userId) {
    try {
        const notes = await noteApi.noteCollection(userId);
        return notes;
    } catch (error) {
        return error;
        
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