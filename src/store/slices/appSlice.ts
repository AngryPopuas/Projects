import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IAppStore, Coord, ILocation } from '../../types'
import { getRandomBgTheme } from '../../utils'




const initialState: IAppStore = {
  coords: {
    lat: -1,
    lon: -1,
  },
  userAllowedLocation: false,
  bgTheme: getRandomBgTheme(),
  locations: [],
  queryWeatherMethod: 'Coords',
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUserLocation: (state, action: PayloadAction<Coord>) => {
      state.coords.lat = action.payload.lat
      state.coords.lon = action.payload.lon
      state.userAllowedLocation = true
    },
    setAddLocation: (state, action: PayloadAction<ILocation>) => {
      state.locations.push(action.payload)
    },
    setRemoveLocation: (state,action:PayloadAction<string>) => {
      state.locations = state.locations.filter(item => item.city !== action.payload)
    },
    setLocationActive: (state, action: PayloadAction<string>) => {
      state.locations.forEach((item) => {
        if (item.city === action.payload) {
          item.isActive = !item.isActive
          item.isActive
            ?
            state.queryWeatherMethod = 'City'
            :
            state.queryWeatherMethod = 'Coords'
        } else {
          item.isActive = false
        }
      })
    },
    setMultipleLocations: (state,action: PayloadAction<Array<ILocation>>) => {
      state.locations = action.payload
    },
    setLocationData: (state, action: PayloadAction<ILocation>) => {
      state.locations.forEach((item) => {
        if (item.city === action.payload.city) {
          item = action.payload
        }
      })
    },
  },
})


export const { setUserLocation, setAddLocation, setLocationActive, setLocationData,setRemoveLocation,setMultipleLocations } = appSlice.actions
export default appSlice.reducer