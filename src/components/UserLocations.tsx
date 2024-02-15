import { View, Text, Alert } from "react-native"
import { useAppSelector, useAppDispatch } from "../hooks"
import { setAddLocation, setLocationActive, setLocationData, setRemoveLocation } from "../store/slices/appSlice"
import { ILocation, List } from "../types"
import LinearGradient from "react-native-linear-gradient"
import { styles } from "../assets/styles/globals"
import FadeIn from "./FadeIn"
import { useGetWeatherForecastCityQuery, useLazyGetWeatherForecastCityQuery } from "../store/api/weather.api"
import Loader from "./Loader"
import { useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"



const UserLocation = ({ props }: { props: ILocation }) => {
    const dispatch = useAppDispatch()
    const isActive = useAppSelector(store => store.app.locations.find(item => item.city === props.city)?.isActive)
    const [trigger, result] = useLazyGetWeatherForecastCityQuery()



    useEffect(() => {
        if (props.status === 'waiting') {
            trigger(props.city).then(
                async (result) => {
                    if (result.status === 'fulfilled') {
                        dispatch(setLocationData({ city: props.city, isActive: false, status: 'valid', }))
                        // const data = props
                        // console.log(props)
                        // await AsyncStorage.setItem(props.city,JSON.stringify([data]))
                    } else {
                        Alert.alert('An error occured while trying to load a locaion',
                            'Make sure you are connected to internet.')
                        dispatch(setLocationData({ city: props.city, isActive: false, status: 'error', }))
                        dispatch(setRemoveLocation(props.city))
                    }
                }
            )
        }
    }, [])

    const handleSetLocation = () => {
        dispatch(setLocationActive(props.city))
    }

    return (
        <FadeIn style={{ width: '100%' }}>
            <LinearGradient

                onTouchEnd={handleSetLocation}
                colors={props.BgLinear ? props.BgLinear : ['#101623', '#2A3040']}
                style={{
                    borderRadius: 10,
                    width: '100%',
                    height: 110,
                    display: 'flex',
                    opacity: isActive ? 1 : 0.6,
                    borderWidth: isActive ? 0.5 : 0,
                    borderColor: isActive ? 'white' : ''
                }}>
                {
                    result.status === 'fulfilled'
                        ?
                        <View style={{
                            paddingVertical: 5,
                            paddingHorizontal: 10,
                            display: 'flex',
                            justifyContent: 'space-between',
                            height: '100%',
                        }}>
                            <View style={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <View>
                                    <Text style={[styles.h1_semibold, { fontSize: 30 }]}>{result.data?.city.name}</Text>
                                    <Text>{result.data?.city.country}</Text>
                                </View>
                                <View>
                                    <Text style={[styles.h1_regular]}>{Number(Math.floor(result.data!.list[0].main.temp) - 273)}°C</Text>
                                </View>
                            </View>
                            <View style={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'flex-end'
                            }}>
                                <View>
                                    <Text style={[styles.h1_medium]}>{result.data?.list[0].weather[0].description}</Text>
                                </View>
                                <View>
                                    <Text>{result.data?.list[0].dt_txt.slice(10)}</Text>
                                </View>
                            </View>
                        </View>
                        :
                        <Loader props={{ color: 'white', size: 'large' }} />
                }
            </LinearGradient>
        </FadeIn>
    )
}
export default UserLocation