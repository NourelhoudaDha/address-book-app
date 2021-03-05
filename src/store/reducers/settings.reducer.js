import { createSlice } from '@reduxjs/toolkit'
import { updateNationality } from '../actions'

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    nationality: '',
  },
  extraReducers: {
    [updateNationality]: (state, action) => {
      state.nationality = action.payload
    },
  },
})

export default settingsSlice.reducer
