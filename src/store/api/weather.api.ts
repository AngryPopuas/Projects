import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Coord,ILocations,IWeatherForecast } from "../../types";

export const weatherApi = createApi({
    reducerPath: 'api/weather',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/' }),
    endpoints: build => ({
        getWeatherForecastCity: build.query<IWeatherForecast,string>({ query: (city) => `/data/2.5/forecast?q=${city}&appid=6a505715bd1d5dd377ff1c369d66b0c3`}),
        getWeatherForecastCoords: build.query<IWeatherForecast,Coord>({ query: (coords) => `data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=6a505715bd1d5dd377ff1c369d66b0c3` }),
        getWeatherLocations: build.query<ILocations[],string>({query: (locations:string) => `geo/1.0/direct?q=${locations}&limit=5&appid=6a505715bd1d5dd377ff1c369d66b0c3`})
    })
})
export const {useGetWeatherForecastCityQuery} = weatherApi
export const {useLazyGetWeatherForecastCityQuery} = weatherApi
export const {useLazyGetWeatherLocationsQuery} = weatherApi
export const {useGetWeatherForecastCoordsQuery} = weatherApi