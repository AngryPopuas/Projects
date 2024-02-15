import { View, Text } from "react-native"
import { styles } from "../assets/styles/globals"
import { City, List } from "../types"
import FadeIn from "./FadeIn"



const WeatherHeader = ({ props, city }: { props: List, city: City }) => {
    return (
        <FadeIn>
            <View style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 20,

            }}>
                <Text style={styles.h1_regular}>{city.name}</Text>
                <Text style={styles.h1_bold}>{Number(Math.floor(props.main.temp - 273))}°</Text>
                <Text style={styles.h1_regular}>{city.country}</Text>
                <Text style={styles.h1_medium}>{props.main.pressure} hPa</Text>
            </View>
        </FadeIn>
    )
}
export default WeatherHeader