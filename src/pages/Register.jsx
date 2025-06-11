import React, { useState } from 'react'
import { TextField, Button, Box, Typography } from '@mui/material'
// import { useDispatch } from 'redux'
import { useDispatch } from 'react-redux'; 
import NavBar from "../components/NavBar";

import { registerUser } from '../redux/userSlice'
import { useNavigate } from 'react-router-dom'

<NavBar />

const Register = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(registerUser({ name, phone }))
    navigate('/dashboard')
  }

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8 }}>
      <Typography variant="h5" mb={2}>הרשמה</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="שם"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="טלפון"
          fullWidth
          margin="normal"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          הירשם
        </Button>
      </form>
    </Box>
  )
}

export default Register
