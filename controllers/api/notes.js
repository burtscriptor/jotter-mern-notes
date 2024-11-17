const note = require('../../models/note');


const index = async (request, respond) => {
    console.log("noteCollection reporting");
    respond.json("noteCollection end point");
   
};

const create = async (request, respond) => {
    console.log('createNote reporting');
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