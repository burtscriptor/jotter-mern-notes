
const BASE_URL = 'api/notes';
import { noteSendRequest } from "./note-send-request";


export async function noteCollection(userId) {
    try {
       const response = await fetch(`${BASE_URL}/${userId}`);
       const notes = await response.json();
       return { data: notes };
    } catch (error) {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }   
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