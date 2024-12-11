import { DeleteOutline,  } from '@mui/icons-material'
import { Box, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import React from 'react'

const NoteCard = ({note, handleDelete}) => {
  return (
    <Box>
      <Card elevation={3}>
        <CardHeader 
          action={<IconButton onClick={() => handleDelete(note.id)}><DeleteOutline/></IconButton>}  
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary'>
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default NoteCard