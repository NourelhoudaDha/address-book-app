import { createSlice } from '@reduxjs/toolkit'
import { getUsers, updateNationality } from '../actions'

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    list: {},
    loading: false,
    error: undefined,
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.loading = true
      state.error = undefined
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.error = undefined
      state.list = { ...state.list, ...payload }
    },
    [getUsers.rejected]: (state) => {
      state.loading = false
      state.error
    },
    [updateNationality]: (state) => {
      state.loading = false
      state.error = undefined
      state.list = {}
    },
  },
})

export default usersSlice.reducer
