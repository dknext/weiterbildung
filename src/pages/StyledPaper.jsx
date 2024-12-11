import { Button, Paper } from '@mui/material'
import React from 'react'



import {styled} from "@mui/system"
const StyledPaper1 = styled(Paper, {})({
  backgroundColor:"silver",
  borderRadius:2,
  height:"300px",
  width:"300px",
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
})
// pxは省略しても可

const StyledPaper2 = styled(Paper, {}) 
`
  background-color:silver;
  border-radius:2px;
  height:400px;
  width:300px;
  display:flex;
  align-items:center;
  justify-content:center `;

// 上のStyledPaper1, 2どちらでもcssの表現可



const StyledPaper = () => {

  return (
    <StyledPaper1>
      <Button variant="outlined">Test</Button>
    </StyledPaper1>
  )
}



export default StyledPaper