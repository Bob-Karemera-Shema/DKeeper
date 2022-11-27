import React, {useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateNote(props) {

    let [note, setNote]=useState({
        title: "",
        content: ""
    });

    let [isExpanded, setIsExpanded] = useState(false);

    function updateNote(event){
        let {name, value} = event.target;

        setNote(prevNote => {
            return {
            ...prevNote,
            [name]: value
        }});
    }

    function submitNote(event){
        props.onAdd(note);
        event.preventDefault();
        setNote(() => {
            return{
                title: "",
                content: ""
            }
        });
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && (<input onChange={updateNote} name="title" placeholder="Title" value={note.title} />)}
                <textarea 
                    onChange={updateNote}
                    onClick={() => { setIsExpanded(true) }} 
                    name="content" 
                    placeholder="Take a note..." 
                    rows={isExpanded ? 3 : 1} 
                    value={note.content} />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
                
            </form>
        </div>
    );
}

export default CreateNote;