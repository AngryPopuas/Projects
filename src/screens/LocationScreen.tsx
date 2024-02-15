import { TextInput, View, Text, TouchableOpacity, ScrollView, Alert, Linking } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../assets/styles/globals'
import { useLazyGetWeatherForecastCityQuery, useLazyGetWeatherLocationsQuery } from '../store/api/weather.api'
import { useEffect, useState } from 'react'
import { setAddLocation } from '../store/slices/appSlice'
import { useAppDispatch, useAppSelector } from '../hooks'
import { ILocation, ILocations } from '../types'
import { getRandomBgLinear } from '../utils'
import UserLocation from '../components/UserLocations'
import AsyncStorage from '@react-native-async-storage/async-storage'


const LocationScreen = () => {
    const dispatch = useAppDispatch()
    const { locations } = useAppSelector(store => store.app)
    const [trigger, result] = useLazyGetWeatherLocationsQuery()
    const [locationSearch, setLocationSearch] = useState('')




    const handleAddLocation = async (location: ILocations) => {
        if (locations.find(item => item.city === location.name)) { Alert.alert('You already added this location') }
        else {
            const data: ILocation = { status: 'waiting', city: location.name, isActive: false, BgLinear: getRandomBgLinear() }
            dispatch(setAddLocation({ status: 'waiting', city: location.name, isActive: false, BgLinear: getRandomBgLinear() }))
        }
        setLocationSearch('')
        result.data = []
    }
    const handleGetLocations = (text: string) => {
        if (text === ' ') {
            return
        }
        trigger(text.replaceAll(' ', ''))
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'black',
        }}>
            <SafeAreaView style={{
                paddingTop: 45,
                paddingHorizontal: 20,
                flex: 1,
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <View style={{ minHeight: 280 }}>
                    <Text style={styles.h1_semibold}>Weather</Text>
                    <TextInput
                        style={[styles.input_regular, { marginTop: 10 }]}
                        placeholderTextColor={'#868686'}
                        placeholder='Search for a city'
                        value={locationSearch}
                        onChangeText={(text) => {
                            setLocationSearch(text)
                            handleGetLocations(text)
                        }}
                    />

                    {result.status === 'fulfilled' &&
                        <View style={{
                            width: '100%',
                            minHeight: 50,
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            {result.data?.map((item) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => { handleAddLocation(item) }}
                                        style={{
                                            width: '100%',
                                            backgroundColor: 'black',
                                            opacity: 0.75,
                                            borderBottomColor: '#3C4147',
                                            borderBottomWidth: 0.5,
                                            paddingBottom: 10,
                                        }}
                                        key={result.data?.indexOf(item)}>
                                        <Text style={styles.h1_medium}>{item.name}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    }
                </View>
                <ScrollView scrollEnabled style={{
                    flex: 1,
                }}>
                    {locations
                        ?
                        locations.map((item) => {
                            return (
                                <View
                                    style={{
                                        marginVertical: 5
                                    }}
                                    key={locations.indexOf(item)}>
                                    <UserLocation props={item}></UserLocation>
                                </View>
                            )
                        })
                        :
                        <></>
                    }
                </ScrollView>
                <View style={{
                    borderBottomColor: '#3C4147',
                    borderBottomWidth: 0.5,
                    paddingVertical: 20,
                }}>
                    <Text style={[styles.h1_medium, { fontSize: 15, textAlign: 'center' }]}>Learn more about weather data and map data</Text>
                </View>
                <Text style={{ color: 'blue',textAlign:'center' }} onPress={() => Linking.openURL('https://openweathermap.org/')}>Open weather</Text>
            </SafeAreaView>
        </View>
    )
}
export default LocationScreen
