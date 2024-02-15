import { Text, View } from "react-native"
import FadeIn from "./FadeIn"
import { City, List } from "../types"
import SunrizeIcon from '../assets/images/Icons/SunriseIcon.svg'
import { styles } from "../assets/styles/globals"
import { msToTime } from "../utils"
import LinearDiagram from "./LinearDiagram"


const Sunrize = ({ props }: { props: City }) => {

    const currentDate = new Date()
    // const MsTime = Number(String(currentDate.getTime()).slice(0,10))
    // console.log(Math.abs(props.sunset - props.sunrise), Math.abs(MsTime - props.sunrise), Math.abs(MsTime - props.sunset),'dsdsd')
    // const dotPosition = ((Math.abs(props.sunset - props.sunrise) / 100) / (Math.abs(MsTime - props.sunset) / 100))
    // console.log(dotPosition)
    return (
        <FadeIn style={{
            paddingVertical: 5
        }}>
            <View style={{
                backgroundColor: '#232A33',
                borderRadius: 15,
                width: '100%',
                paddingHorizontal: 15,
                paddingVertical: 10,
                opacity: 0.75,
                borderColor: '#3C4147',
                borderWidth: 0.5,
            }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}><SunrizeIcon /><Text style={{ marginLeft: 5 }}>SUNRIZE</Text></View>
                <Text style={[styles.h1_semibold, { marginTop: 5,fontSize:32 }]}>{msToTime(props.sunrise)}</Text>
                <LinearDiagram props={currentDate.getHours() * (100 / 24)} colors={['#ffffff','#000000']}/>
                <Text style={[styles.h1_medium, { marginTop: 10 }]}>Sunset at {msToTime(props.sunset)}</Text>
            </View>
        </FadeIn>
    )
}
export default Sunrize