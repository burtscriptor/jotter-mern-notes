
const BASE_URL = 'api/notes';
import { noteSendRequest } from "./note-send-request";


export async function noteCollection () {
    try {
        const notes = await fetch(`${BASE_URL}/notes`);
       return {
            data: notes,
        };
    } catch (error) {
        console.error("Error fetching notes:", error);   
    }
};

export async function createNotes(data, user) {
    try {
      return noteSendRequest(`${BASE_URL}/add`, "POST", data, user);
    } catch (error) {
        console.log("createNotes error");
        return error;
    };

};