import { View, Text } from "react-native"
import FadeIn from "./FadeIn"
import { List } from "../types"
import { styles } from "../assets/styles/globals"
import { getSvgWeather } from "../utils"
import ForecastIcon from '../assets/images/Icons/ForecastIcon.svg'


const WeahterForecast = ({ props }: { props: List[] }) => {

    return (
        <FadeIn style={{
            paddingVertical:5
        }}>
            <View style={{
                backgroundColor: '#232A33',
                borderRadius: 15,
                borderColor: '#3C4147',
                borderWidth:0.5,
                width: '100%',
                paddingHorizontal: 15,
                paddingVertical: 10,
                opacity: 0.75
            }}>
                <View style={{
                    borderBottomColor: '#3C4147',
                    borderBottomWidth: 0.5,
                    paddingBottom: 10,
                }}>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <ForecastIcon />
                        <Text style={{marginLeft:10}}>Weather forecast</Text>
                    </View>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 10,
                }}>
                    {props.map((item) => {
                        return (
                            <WeahterForecastItem key={props.indexOf(item)} props={item} />
                        )
                    })}
                </View>
            </View>
        </FadeIn>
    )
}

const WeahterForecastItem = ({ props }: { props: List }) => {
    const WeatherImage = getSvgWeather({
        Main: props.weather[0].main,
        Description: props.weather[0].description
    })

    return (
        <View style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 5,
            borderBottomColor: '#3C4147',
            borderBottomWidth: 0.5,
            paddingBottom: 10,
        }}>
            <View><Text style={styles.h1_medium}>{props.dt_txt.slice(0, 10)}</Text></View>
            <WeatherImage width={32} height={32} />
            <Text style={[styles.h1_medium, { minWidth: 40 }]}>{Number(Math.floor(props.main.temp_min - 273))}°</Text>
            <Text style={[styles.h1_regular, { minWidth: 40 }]}>{Number(Math.floor(props.main.temp_max - 273))}°</Text>
        </View>
    )
}


export default WeahterForecast