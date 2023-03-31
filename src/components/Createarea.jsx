import React, {useState} from  "react";

function Createarea(props) {

  const [InputNote,SetInputNote]=useState({
    title:"",
    content:"",
  });

  function handleChange(event){
    
    const {name,value}=event.target;

    SetInputNote(function(prevNote){
      return {
        ...prevNote,
        [name]:value,
      }
    })
  }

  function submitNote(event){

    event.preventDefault();

    
    SetInputNote({
      title:"",
      content:"",
      
    })
    props.onSubmit(InputNote);

  

  }

  return (
    <div>
      <form>
        <input onChange ={handleChange}name="title" value={InputNote.title} placeholder="Title" />
        <textarea onChange={handleChange} name="content"value={InputNote.content}  placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default Createarea;
