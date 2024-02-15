import { View } from "react-native"
import LinearGradient from "react-native-linear-gradient"

const LinearDiagram = ({ props,colors }: { props?: number, colors?:string[] }) => {
    return (
        <LinearGradient
            style={{
                width: '100%',
                height: 5,
                borderRadius: 4,
                position: "relative",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            useAngle={true}
            angle={90}
            colors={colors ? colors : ['#4792F2', '#65DB7C', '#E63A52', '#75212D']}
        >
            {props
                ?
                <View style={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    opacity: 1,
                    backgroundColor: 'white',
                    position: 'absolute',
                    left: `${props}%`,

                }}>

                </View>
                :
                <></>
            }
        </LinearGradient>
    )
}
export default LinearDiagram