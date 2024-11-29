const Note = require('../../models/note');


const index = async (request, respond) => {
    console.log("user", request.params.userId);
   try {
    const query =  { user: request.params.userId }
    const notes = await Note.find(query);
    console.log(notes);
    respond.json(notes);
   } catch (error) {
    console.log(error);
    respond.status(400).json(error);
   }
   
};

const create = async (request, respond) => {
    try {
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

