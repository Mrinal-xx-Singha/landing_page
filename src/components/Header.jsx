import React from 'react'
import  AppBar from '@mui/material/AppBar'
import {Typography} from '@mui/material'
import {IconButton,Toolbar } from '@mui/material'
import SortIcon from '@mui/icons-material/Sort';
import { Box } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Header = () => {
  return (
    <div>
      <AppBar  position='static' sx={{ background:'none',elevation: '0',fontFamily:'Montserrat',border:0 }}>
        <Toolbar width='80%' margin='0 auto'>
        <Typography variant='h4' sx={{ flexGrow:'1',fontFamily:'Montserrat'}}>ANIME-MX</Typography>
        <IconButton edge='start' color='blue' arial-label='menu' sx={{mr:2}}>
            <SortIcon sx={{ color:'#fff',fontSize:'2rem'}} />
        </IconButton>
        </Toolbar>
      </AppBar>
      <Box display='block' p={2} m={2}>
      <Typography variant='h1'  height='100vh' fontFamily='Montserrat' fontSize='50px'  sx={{ display:'flex',
      justifyContent:'center',
      alignItems:'center' ,
      fontSize:'3rem',
      color:'#fff',
      textAlign:'center',
      p:2,m:2}} gutterBottom>WELCOME TO MY{ ' '}ANIME WEBSITE
      </Typography>
      <IconButton>
        <ExpandMoreIcon fontSize='2rem' />
      </IconButton>
      </Box>
    </div>
  )
}

export default Header
