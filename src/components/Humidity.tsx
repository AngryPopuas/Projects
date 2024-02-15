import { Text, View } from "react-native"
import FadeIn from "./FadeIn"
import { List } from "../types"
import HumidityIcon from '../assets/images/Icons/HumidityIcon.svg'
import { styles } from "../assets/styles/globals"


const Humidity = ({ props }: { props: List }) => {
    return (
        <FadeIn style={{
            paddingVertical: 5
        }}>
            <View style={{
                backgroundColor: '#232A33',
                borderRadius: 15,
                width:'100%',
                paddingHorizontal: 15,
                paddingVertical: 10,
                opacity: 0.75,
                minHeight:150,
                borderColor: '#3C4147',
                borderWidth: 0.5,
            }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}><HumidityIcon /><Text style={{ marginLeft: 5 }}>HUMIDITY</Text></View>
                <Text style={[styles.h1_semibold, { marginTop: 5 }]}>{props.main.humidity}%</Text>
                <Text style={[styles.h1_medium, { marginTop: 10 }]}>The cloudiness is {props.clouds.all}%</Text>
            </View>
        </FadeIn>
    )
}
export default Humidity