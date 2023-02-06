import React from 'react'
import  AppBar from '@mui/material/AppBar'
import {Typography} from '@mui/material'
import {IconButton,Toolbar } from '@mui/material'
import SortIcon from '@mui/icons-material/Sort';

const Header = () => {
  return (
    <div>
      <AppBar  position='static' sx={{ background:'none',elevation: '0'}}>
        <Toolbar width='80%' margin='0 auto'>
        <Typography variant='h4' sx={{ flexGrow:'1'}}>MY ANIME WEBSITE</Typography>
        <IconButton edge='start' color='blue' arial-label='menu' sx={{mr:2}}>
            <SortIcon sx={{ color:'#fff',fontSize:'2rem'}} />
        </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
