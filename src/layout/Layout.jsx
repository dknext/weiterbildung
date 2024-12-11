import { AddCircleOutline, SubjectOutlined } from '@mui/icons-material'
import { AppBar, Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import {format} from "date-fns"

const drawerWidth = "240px"


const Layout = () => {

  const menuItems = [
    {
      text:"My Notes",
      icon: <SubjectOutlined color='secondary'/>,
      path:"/"
    },
    {
      text:"Create Notes",
      icon: <AddCircleOutline color='secondary'/>,
      path:"/create"
    },
  ]
  const navigate = useNavigate()
  const location = useLocation()




  return (
    <div style={{display:"flex"}}>

      <AppBar sx={{width:`calc(100% - ${drawerWidth})`}}>
        <Toolbar>
          <Typography sx={{flexGrow:1}}>{format(new Date(), "do MMMM Y")}</Typography>
          <Typography>Mario</Typography>
        </Toolbar>
      </AppBar>


      <Drawer sx={{ width: drawerWidth}} variant='permanent' anchor='left'  PaperProps={{ sx: { width: drawerWidth } }}  >
        <Typography variant='h5'>Daichi's Note</Typography>
        <List>
          {menuItems.map(item => {
            return (
              <ListItem key={item.text} button onClick={() => navigate(`${item.path}`)} sx={{backgroundColor:location.pathname === item.path ? "lightBlue":null}}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text}/>
              </ListItem>
            )
          })}
        </List>
      </Drawer>
      <Box sx={{flexGrow:1, marginTop:"63.9915px"}}>
        <Outlet />
      </Box>
    </div>
  )
}

export default Layout




// sx: スタイルをインラインで簡潔に書くためのプロパティ（Material-UI の推奨方法）。
// classes: カスタム CSS クラスを割り当てるためのプロパティ（クラスベースのスタイリングに利用）。