import { PixelRatio, StyleSheet } from 'react-native';
import { useAppSelector } from '../../hooks';

const fontSizeAdaptive = PixelRatio.get()

export const styles = StyleSheet.create({
    h1_bold: {
        color: 'white',
        fontSize: fontSizeAdaptive * 34,
        fontWeight: '300',
    },
    h1_semibold: {
        color: 'white',
        fontSize: fontSizeAdaptive * 17,
        fontWeight: '800',
    },
    h1_regular: {
        color: 'white',
        fontSize: fontSizeAdaptive * 8,
        fontWeight: '400',
    },
    h1_medium: {
        color: 'white',
        fontSize: fontSizeAdaptive * 6,
        fontStyle: 'normal',
        fontWeight: '100',
    },
    input_regular: {
        fontSize:fontSizeAdaptive * 6,
        fontWeight:'400',
        borderRadius:10,
        backgroundColor:'#191919',
        padding:7,
        width:'100%'
    }
})