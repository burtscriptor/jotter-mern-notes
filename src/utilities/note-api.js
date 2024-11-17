
const BASE_URL = 'api/notes';

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

export default function createNotes (data) {
    try {
        const note_to_add = await (`${BASE_URL}/add`)
        
        return {data: msg} ;
    } catch (error) {
        console.log("createNotes error");
        return error;
    };

};