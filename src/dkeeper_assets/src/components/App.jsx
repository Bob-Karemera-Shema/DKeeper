import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";
import { dkeeper } from "../../../declarations/dkeeper";

function App(){

    let [notes, setNotes] = useState([]);

    function addNote(note){
        setNotes(prevNotes => {
            dkeeper.createNote(note.title, note.content);
            return [...prevNotes, note];
        });
    }

    function deleteNote(id){
        setNotes(prevNotes => {
            return prevNotes.filter((item, index) => {
                return index !== id;
            })
        })
    }

    return (<div>
        <Header/>
        <CreateNote onAdd={addNote}/>
        {notes.map( (note, index) => (<Note 
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
        />))}
        <Footer/>
    </div>);
}

export default App;