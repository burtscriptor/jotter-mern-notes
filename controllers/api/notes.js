const Note = require('../../models/note');


const index = async (request, respond) => {
    console.log("noteCollection reporting");
    respond.json("noteCollection end point");
   
};

const create = async (request, respond) => {
    try {
        console.log(request.body);
        const note = Note.create(request.body);
        respond.json("Save successful" );
    } catch (error) {
        respond.status(400).json(error);
    }
};

const remove = async (request, respond) => {
    console.log('deleteNote here');
};

const edit = async (request, respond) => {
    console.log('editNote reporting in');
};

module.exports = {
    index,
    create,
    remove,
    edit
};