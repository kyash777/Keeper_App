import React, { useState } from "react";

import Header from "./header";

import Footer from "./footer";

import Note from "./note";

import Createarea from "./Createarea.jsx";

function App() {

    const [Items,setItems]=useState([]);

    function addItem(note){

       setItems(function(prevnotes){
        return [...prevnotes,note];
       })

    }

    function Delete(id){

        setItems(function(prevItems){
            return prevItems.filter(function(PrevItem,indx){
                return indx!==id;
            })
        })

    }

  return (
    <div>
      <Header />
      <Createarea onSubmit={addItem} />
      {Items.map(function(Item,indx){
        return <Note key={indx} id={indx} Fire={Delete} title={Item.title} content={Item.content}/>
      })}
      <Footer />
    </div>
  );
}

export default App;