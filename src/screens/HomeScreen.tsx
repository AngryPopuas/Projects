import { View, Text, Image, ScrollView, Dimensions, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useEffect } from "react"
import LinearGradient from "react-native-linear-gradient"
import WeatherHeader from "../components/WeatherHeader"
import CloudConditions from "../components/CloudConditions"
import WeahterForecast from "../components/WeatherForecast"
import GetLocation from 'react-native-get-location'
import Humidity from "../components/Humidity"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useGetWeatherForecastCoordsQuery, useGetWeatherForecastCityQuery } from "../store/api/weather.api"
import { useAppSelector, useAppDispatch } from "../hooks"
import { setAddLocation, setUserLocation } from "../store/slices/appSlice"
import Loader from "../components/Loader"
import AirQuality from "../components/AirQuality"
import FeelsLike from "../components/FeelsLike"
import Sunrize from "../components/SunRise"
import { styles } from "../assets/styles/globals"

const HomeScreen = () => {
    const dispatch = useAppDispatch()
    const { coords, userAllowedLocation, queryWeatherMethod, locations } = useAppSelector(store => store.app)
    const { data, error, status, isLoading, isError } =
        queryWeatherMethod === 'Coords' ?
            useGetWeatherForecastCoordsQuery(coords, { skip: !userAllowedLocation })
            :
            useGetWeatherForecastCityQuery(locations.find(item => item.isActive)!.city)

    // const handleStorageLocation = async () => {
    //     const LocationStorage = await AsyncStorage.getItem('location')
    //     if (LocationStorage !== null) {
    //         const Location = JSON.parse(LocationStorage)
    //         dispatch(setUserLocation({ lat: Location.latitude, lon: Location.longitude }))
    //     }
    // }

    useEffect(() => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 60000,
        }).then((location) => {
            const Location = { lat: location.latitude, lon: location.longitude }
            dispatch(setUserLocation(Location))
        })
    }, [])

    return (
        <LinearGradient colors={['#0a0f19', '#060608']} style={{ flex: 1 }}>
            <Image source={require('../assets/images/Bg/WeatherBG.jpg')} style={{
                position: 'absolute',
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height,
                opacity: 0.05,
            }} />
            <View style={{
                paddingHorizontal: 20,
                paddingTop: 30,
                flex: 1,
            }}>
                {status === 'fulfilled'
                    ?
                    <ScrollView scrollEnabled style={{ flex: 1, minHeight: '100%' }}>
                        <WeatherHeader props={data!.list[0]} city={data!.city} />
                        <CloudConditions props={data!.list.slice(0, 5)} />
                        <WeahterForecast props={data!.list.slice(0, 10)} />
                        <AirQuality props={data!.list[0]} />
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ width: '50%', paddingRight: 5 }}><Humidity props={data!.list[0]} /></View>
                            <View style={{ width: '50%', paddingLeft: 5 }}><FeelsLike props={data!.list[0]} /></View>
                        </View>
                        <Sunrize props={data!.city} />
                    </ScrollView>
                    :
                    !userAllowedLocation && queryWeatherMethod === 'Coords'
                        ?
                        <View style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 1,
                        }}>
                            <Text style={styles.h1_medium}>Allow your location or type in any City you want...</Text>
                        </View>
                        :
                        <Loader props={{ color: 'white', size: 'large' }} />
                }
            </View>
        </LinearGradient>
    )
}
export default HomeScreen