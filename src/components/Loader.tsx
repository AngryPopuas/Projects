import { ActivityIndicator, View } from "react-native"



const Loader = ({props}:{props: {color:string, size:'large'|'small'}}) => {
    return (
        <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        }}>
            <ActivityIndicator size={props.size} color={props.color}/>
        </View>
    )
}
export default Loader