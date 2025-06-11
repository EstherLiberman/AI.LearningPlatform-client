import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  phone: '',
  isLoggedIn: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.name = action.payload.name
      state.phone = action.payload.phone
      state.isLoggedIn = true
    },
  },
})

export const { registerUser } = userSlice.actions
export default userSlice.reducer
