import { Container,  } from "@mui/material";
import  Grid  from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";
import Masonry from "react-masonry-css";



const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = async(noteId) => {
    await fetch(`http://localhost:8000/notes/${noteId}`,{
      method:"DELETE",
    })
    
    const newNotes = notes.filter(note => note.id !== noteId)
    setNotes(newNotes)
  }



  const breakpoints ={
    default:3,
    1100:2,
    700:1
  }


  return (
    <Container>
      {/* <Grid container spacing={2}>
        {notes.map((note) => {
          return (
            <Grid size={{xs:12,md:6, lg:4}} key={note.id}>
              <NoteCard note={note} handleDelete={handleDelete}/>
            </Grid>
          )
        })}
      </Grid> */}
      {/* or */}
      <Masonry breakpointCols={breakpoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column" >
        {notes.map((note) => {
          return (
            <div key={note.id}>
              <NoteCard note={note} handleDelete={handleDelete}/>
            </div>
          )
        })}
      </Masonry >
      
    </Container>
  );
};

export default Notes;
