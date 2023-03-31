import React from "react";

function note(props) {

  function handleClick(id){

    props.Fire(props.id);


  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default note;