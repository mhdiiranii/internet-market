import { configureStore } from '@reduxjs/toolkit'
import allSlice from './faeture/allSlice'
// ...

export const store = configureStore({
  reducer: {
    all : allSlice
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch