import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          פלטפורמת לימוד
        </Typography>
        <Button color="inherit" component={Link} to="/">בית</Button>
        <Button color="inherit" component={Link} to="/register">הרשמה</Button>
        <Button color="inherit" component={Link} to="/dashboard">דשבורד</Button>
        <Button color="inherit" component={Link} to="/admin">אדמין</Button>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
