import { configureStore } from '@reduxjs/toolkit'
import { userReducer, settingReducer } from './reducers'
export default configureStore({
  reducer: {
    users: userReducer,
    settings: settingReducer,
  },
})
