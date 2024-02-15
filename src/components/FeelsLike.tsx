import { Text, View } from "react-native"
import FadeIn from "./FadeIn"
import { List } from "../types"
import FeelsLikeIcon from '../assets/images/Icons/FeelsLikeIcon.svg'
import { styles } from "../assets/styles/globals"


const FeelsLike = ({ props }: { props: List }) => {
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
                minHeight:150,
                opacity: 0.75,
                borderColor: '#3C4147',
                borderWidth: 0.5,
            }}>
                <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}><FeelsLikeIcon/><Text style={{marginLeft:5}}>FEELS LIKE</Text></View>
                <Text style={[styles.h1_semibold,{marginTop:5}]}>{Number(Math.floor(props.main.feels_like - 273))}°</Text>
                <Text style={[styles.h1_medium, {marginTop:10}]}>Temperature kf is {props.main.temp_kf}.</Text>
            </View>
        </FadeIn>
    )
}
export default FeelsLike