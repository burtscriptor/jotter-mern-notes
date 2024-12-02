import React, { useState, useEffect } from 'react';
import { getNotes, addNotes } from '../../utilities/note-services';

const HomePage = ({ user }) => {
    const [userNotes, setUserNotes] = useState({
        addNote: "",
        existing_notes: [],
    });

    const getCollection = async () => {
        try {
            const userID = user._id; // Access user directly from props
            const notes = await getNotes(userID);
            console.log('Fetched notes:', notes.data.data);

            setUserNotes((prev) => ({ ...prev, existing_notes: notes.data.data }));
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };

    useEffect(() => {
        getCollection();
    }, [user]); // Add `user` as a dependency to ensure it updates correctly

    const handleChange = (event) => {
        setUserNotes((prev) => ({ ...prev, addNote: event.target.value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = userNotes.addNote;
            await addNotes(data, user); // Use user directly from props
            setUserNotes((prev) => ({ ...prev, addNote: "" })); // Reset the input field
            getCollection(); // Refresh the notes
        } catch (error) {
            console.error("HandleSubmit error:", error);
        }
    };

    return (
        <main className="home-content">
            <div className="home-header">
                <h1>Hey, this is the home header</h1>
            </div>
            <div className="date-time">
                <h2>Date coming soon</h2>
            </div>

            <div className="note-input-form">
                <form autoComplete="off" onSubmit={handleSubmit}>
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
                {userNotes.existing_notes.data.data.length > 0 ? (
                    userNotes.existing_notes.map((note, index) => (
                        <div className="note" key={index}>
                            <p>{note}</p>
                        </div>
                    ))
                ) : (
                    <p>No notes to display</p>
                )}
            </div>
        </main>
    );
};

export default HomePage;
