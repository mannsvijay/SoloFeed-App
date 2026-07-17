// The Redux store is the central place where app state is kept.
// Redux Toolkit makes store setup easier and adds helpful defaults.

import { configureStore, createSlice } from '@reduxjs/toolkit'

// 1. Define the initial state for this slice of the app.
const initialState = {
  user: null,       // user data will be stored here after login
  theme: 'light',   // example UI state for theme selection
}

// 2. Create a slice that contains state and reducers together.
//    `createSlice` generates action creators and the reducer automatically.
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUser(state, action) {
      // `state` can be mutated directly here because Redux Toolkit uses Immer.
      state.user = action.payload
    },
    clearUser(state) {
      state.user = null
    },
    setTheme(state, action) {
      state.theme = action.payload
    },
  },
})

// Export the generated action creators for use in components.
export const { setUser, clearUser, setTheme } = appSlice.actions

// 3. Configure the Redux store with the slice reducer.
//    Add additional reducers inside the `reducer` object as the app grows.
const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
})

export default store

