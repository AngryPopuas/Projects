import { configureStore } from '@reduxjs/toolkit'
import { weatherApi } from './api/weather.api'
import appSlice from './slices/appSlice'

export const store = configureStore({
  reducer: {
    app: appSlice,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch