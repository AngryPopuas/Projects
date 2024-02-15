import React from 'react'
import { View, Text } from 'react-native'
import { List } from '../types'
import FadeIn from './FadeIn'
import AirQualityImage from '../assets/images/Icons/AirQualityIcon.svg'
import { styles } from '../assets/styles/globals'
import LinearDiagram from './LinearDiagram'

const AirQuality = ({ props }: { props: List }) => {

    return (
        <FadeIn style={{
            paddingVertical: 5
        }}>
            <View style={{
                backgroundColor: '#232A33',
                borderColor: '#3C4147',
                borderWidth: 0.5,
                borderRadius: 15,
                width: '100%',
                paddingHorizontal: 15,
                paddingVertical: 10,
                opacity: 0.75
            }}>
                <View style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    paddingBottom: 10,
                }}>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderBottomColor: '#3C4147',
                        borderBottomWidth: 0.5,
                        width: '100%',
                        paddingBottom: 10,
                    }}>
                        <AirQualityImage />
                        <Text style={{ marginLeft: 5 }}>AIR QUALITY</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.h1_regular}>{props.wind.speed} km/h</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={[styles.h1_regular, { fontSize: 16 }]}>Air gust is {props.wind.gust} metre/sec and wind degree is {props.wind.deg}°</Text>
                    </View>
                    <View style={{ marginTop: 20, width: '100%' }}>
                        <LinearDiagram props={Math.ceil(props.wind.speed) === 90 ? 90 : Math.ceil(props.wind.speed)} />
                    </View>
                </View>
            </View>
        </FadeIn>
    )
}
export default AirQuality