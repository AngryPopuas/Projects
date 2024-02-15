import { View, Text } from "react-native"
import { useState } from "react"
import { ICloudConditionItem, List } from "../types"
import { styles } from "../assets/styles/globals"
import { getSvgWeather } from "../utils"
import FadeIn from "./FadeIn"



const CloudConditionItem = ({ props }: { props: List }) => {
    const WeatherImage = getSvgWeather({
        Main: props.weather[0].main,
        Description: props.weather[0].description
    })

    return (
        <View style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
        }}>
            <Text style={styles.h1_medium}>{props.dt_txt.slice(12)}</Text>
            <View style={{ paddingVertical: 20, width: 28 }}><WeatherImage width={28} height={26}/></View>
            <Text style={styles.h1_medium}>{Number(Math.floor(props.main.temp - 273))}°</Text>
        </View>
    )
}



const CloudConditions = ({ props }: { props: List[] }) => {

    return (
        <FadeIn>
            <View style={{
                backgroundColor: '#232A33',
                borderRadius: 15,
                width: '100%',
                paddingHorizontal: 15,
                paddingVertical: 10,
                opacity: 0.75,
                borderColor: '#3C4147',
                borderWidth:0.5,
            }}>
                <View style={{
                    borderBottomColor: '#3C4147',
                    borderBottomWidth: 0.5,
                    paddingBottom: 10,
                }}>
                    <Text style={styles.h1_medium}>Cloudy conditions from 1AM-9AM, with showers expected at 9AM.</Text>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    {
                        props.map((item) => {
                            return (
                                <CloudConditionItem key={props.indexOf(item)} props={item} />
                            )
                        })
                    }
                </View>
            </View>
        </FadeIn>
    )
}

export default CloudConditions