import { Button, ButtonGroup, Typography , Container, TextField, RadioGroup, FormControlLabel, Radio, FormLabel, FormControl} from "@mui/material"
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Create = () => {

  const [title, setTitle] = useState("")
  const [titleError, setTitleError] = useState(false)
  const [details, setDetails] = useState("")
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setDetailsError(false)
    setTitleError(false)

    if(title === ""){
      setTitleError(true)
    }
    if(details === ""){
      setDetailsError(true)
    }

    if(title && details){
      fetch("http://localhost:8000/notes", {
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({title, details, category})
        // idは自動的に追加される
      }).then(() => navigate("/"))
    }
  }
  



  return (
    <Container >

      {/* <Typography variant="h1" component="h2" color="primary" align="center" >
        Create New Note
      </Typography> */}
      {/* <Typography  color="secondary" noWrap >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut praesentium amet animi at a magnam eveniet delectus quo ut laudantium voluptas harum excepturi minima earum quidem quaerat voluptatum, impedit repellat sequi hic dolore iusto quas aliquid reiciendis. Eligendi optio, dolorum quasi nihil quas nam maxime suscipit debitis magnam iusto aspernatur accusantium dolores officiis doloribus quia. Optio quibusdam inventore officia ad voluptatibus odit, maxime beatae pariatur dolores dignissimos. Necessitatibus pariatur rem sequi quis aspernatur aut eum vitae consequatur tempore. Veritatis dolores, corporis quis voluptate, molestiae est velit inventore modi magnam iusto aliquam! Saepe nostrum esse, rerum nemo recusandae delectus magnam suscipit.
      </Typography> */}
      <Typography variant="h6" component="h2" gutterBottom color="textSecondary">
        Create new notes
      </Typography>

      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <TextField label="Note title" variant="outlined" color="secondary" fullWidth required  sx={{
          marginTop: "20px",
          marginBottom: "20px",
          display:"block"
        }} onChange={(e) => {setTitle(e.target.value)}} error={titleError}/>
        <TextField label="Details" variant="outlined" color="secondary" fullWidth required  sx={{
          marginTop: "20px",
          marginBottom: "20px",
          display:"block"
        }} multiline rows={4} onChange={(e) => {setDetails(e.target.value)}} error={detailsError}/>

        
        
        {/*
        <RadioGroup>
          <Radio value="hallo"/>
          <Radio value="goodbye"/>
        </RadioGroup> */}

        <FormControl sx={{
          marginTop: "20px",
          marginBottom: "20px",
          display:"block"
        }}>
          <FormLabel>Note category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio/>} label="Money"/>
            <FormControlLabel value="todos" control={<Radio/>} label="Todos"/>
            <FormControlLabel value="reminders" control={<Radio/>} label="Reminders"/>
          </RadioGroup>
        </FormControl>


        {/* <ButtonGroup> 
          BUttonGroup→ここで子要素のbuttonのcssを一気に変えることができる
          <Button type="submit">Submit</Button>
          <Button type="submit" color="secondary" variant="outlined">Submit</Button>
        </ButtonGroup>
        <Button type="submit" color="secondary" variant="contained" onClick={() => {}}>Submit</Button>
        <Button type="submit" color="secondary" variant="contained" startIcon={<SendIcon/>} onClick={() => {}}  sx={{
            fontSize: "20px",
            backgroundColor: "violet",
            "&:hover": {
              backgroundColor: "purple",
            },
          }}>Submit</Button> */}
        <Button type="submit" color="primary" variant="contained" startIcon={<SendIcon/>} onClick={() => {}} >Submit</Button>
      </form>


      {/* <br/>
      <AcUnitOutlinedIcon color="secondary" fontSize="large"/> */}



    </Container>
  )
}

export default Create