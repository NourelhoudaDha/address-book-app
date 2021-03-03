import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUsers } from '../../services'
import { convertArrayToObject } from '../../utils'

export default createAsyncThunk(
  'users/getUsers',
  async ({ nationality, size }) => {
    const response = await getUsers({ nationality, size })
    return convertArrayToObject(response.data.results, 'username')
  }
)
