import React, { useState, useEffect } from 'react';
import { getNotes, addNotes } from '../../utilities/note-services';

const HomePage = () => {
    const [userNotes, setUserNotes] = useState({
        addNote: "",
        noteCollection: [],
        edit: ""
    });

    useEffect(() => {
        const getCollection = async () => {
            try {
                const notes = await getNotes();
                console.log('Fetched notes:', notes.data);
              
                setUserNotes((prev) => ({...prev, noteCollection: notes.data  }))
            } catch (error) {
                console.error('Error fetching notes:', error);
            }
        };

        getCollection();
    }, []);

    const handleChange = (event) => {
        const note = event.target.value;
        setUserNotes({ ...userNotes, addNote: note });
    };

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const data = userNotes.addNote;
            const add = await addNotes(data);
            console.log(add);
            
        }catch (error) {
            console.log("HandleSubmit error");

        }
    };

    const displayNotes =  userNotes.noteCollection.length > 0 ? 
        userNotes.noteCollection.map((note, index) => (
            <div className="note" key={index}><p key={index}>{note}</p></div>
        )) : (<p>no notes to display</p>);

    return (
        <main className="home-content">
            <div className="home-header">
                <h1>Hey this is the home header</h1>
            </div>
            <div className="date-time">
                <h2>Date coming soon</h2>
            </div>

            <div className="note-input-form">
                <form autoComplete='off' onSubmit={handleSubmit}>
                    <textarea
                        name="addNote"
                        value={userNotes.addNote}
                        onChange={handleChange}
                        required
                    />
                    <button className="input-button" type="submit">
                        Save
                    </button>
                </form>
            </div>

            <div className="display-notes">
               {displayNotes}
            </div>
        </main>
    );
};

export default HomePage;
