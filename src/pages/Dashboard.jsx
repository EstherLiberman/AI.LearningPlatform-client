import React from 'react'
import { Box, Typography } from '@mui/material'
import NavBar from '../components/NavBar'

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <Box sx={{ p: 4 }}>
        <Typography variant="h4">דשבורד למשתמש</Typography>
        <Typography>כאן תוצג היסטוריית הלימוד ופעולות נוספות.</Typography>
      </Box>
    </>
  )
}

export default Dashboard
