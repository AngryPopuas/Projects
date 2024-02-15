import { SvgProps } from "react-native-svg";

export interface IAppStore {
    coords: Coord,
    userAllowedLocation: boolean,
    bgTheme: string,
    locations: Array<ILocation>,
    queryWeatherMethod: 'Coords' | 'City',
}
export interface ILocation { 
    city:string,
    isActive:boolean,
    status: 'valid' | 'error' | 'waiting',
    previousData?: List,
    BgLinear?: string[]
}

export interface ICloudConditionItem {
    time: string,
    image: React.FC<SvgProps>,
    temp: string,
}
export interface ILocations {
    name: string;
    local_names?: Object;
    lat: number;
    lon: number;
    country: string;
    state: string;
  }
export interface IWeatherForecast {
    cod: string;
    message: number;
    cnt: number;
    list: List[];
    city: City;
}

export interface City {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
}

export interface Coord {
    lat: number;
    lon: number;
}

export interface List {
    dt: number;
    main: Main;
    weather: Weather[];
    clouds: Clouds;
    wind: Wind;
    visibility: number;
    pop: number;
    snow?: Snow;
    rain?: Rain,
    sys: Sys;
    dt_txt: string;
}

export interface Sys {
    pod: string;
}

export interface Snow {
    '3h': number;
}
export interface Rain {
    '3h': number;
}

export interface Wind {
    speed: number;
    deg: number;
    gust: number;
}

export interface Clouds {
    all: number;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}

export interface IIcons {
    [name: string]: Discription
}
export interface Discription {
    [name: string]: React.FC<SvgProps>
}