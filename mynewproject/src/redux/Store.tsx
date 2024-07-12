import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counterSlice'
import { authSlice } from './authSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auther: authSlice.reducer
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch