import React from 'react'
import { Box, Typography } from '@mui/material'
import NavBar from '../components/NavBar'

const AdminPanel = () => {
  return (
    <>
      <NavBar />
      <Box sx={{ p: 4 }}>
        <Typography variant="h4">פאנל ניהול</Typography>
        <Typography>רשימת משתמשים והיסטוריית הלימוד שלהם.</Typography>
      </Box>
    </>
  )
}

export default AdminPanel
