

import ThunderStormWithRain from '../assets/images/Icons/ThunderstormWithRain.svg'
import Thunderstorm from '../assets/images/Icons/Thunderstorm.svg'
import LightRain from '../assets/images/Icons/LightRain.svg'
import ModerateRain from '../assets/images/Icons/Moderate rain.svg'
import Rain from '../assets/images/Icons/Rain.svg'
import LightRainAndSnow from '../assets/images/Icons/LightRainAndSnow.svg'
import Snow from '../assets/images/Icons/Snow.svg'
import ShowerSnow from '../assets/images/Icons/ShowerSnow.svg'
import Fog from '../assets/images/Icons/Fog.svg'
import Clear from '../assets/images/Icons/Clear.svg'
import FewClouds from '../assets/images/Icons/FewClouds.svg'
import OverCastClouds from '../assets/images/Icons/Overcast clouds.svg'

import { IIcons } from '../types'
import { SvgProps } from 'react-native-svg'

export const BgImages = {
    BgSpace:require('../assets/images/Bg/WeatherBackground.jpg'),
    BgMountain:require('../assets/images/Bg/WeatherBG.jpg'),
}

export const Icons:IIcons = {
    'Thunderstorm': {
        'thunderstorm with rain': ThunderStormWithRain,
        'thunderstorm': Thunderstorm,
        'default':Thunderstorm,
    },
    'Rain': {
        'light rain': LightRain,
        'moderate rain': ModerateRain,
        'heavy rain':Rain,
        'default':Rain,
    },
    'Snow': {
        'light rain and snow':LightRainAndSnow,
        'shower snow': ShowerSnow,
        'default':Snow,
    },
    'Clouds': {
        'few clouds: 11-25%':FewClouds,
        'scattered clouds: 25-50%':OverCastClouds,
        'default': OverCastClouds,
    },
    'Clear': {
        'default': Clear
    },
    'Mist': {
        'default':Fog,
    },
    'Smoke': {
        'default':Fog,
    },
    'Haze': {
        'default':Fog,
    },
    'Dust': {
        'default':Fog,
    },
    'Fog': {
        'default':Fog,
    },
    'Sand': {
        'default':Fog,
    },
    'Ash': {
        'default':Fog,
    },
    'Squall': {
        'default':Fog,
    },
    'Tornado': {
        'default':Fog,
    },
    'Drizzle': {
        'default':Fog,
    },
}