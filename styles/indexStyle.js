import {StyleSheet} from 'react-native'


export default StyleSheet.create({
    background:{
        backgroundColor:'#25292e',
        alignItems:'center',
        flex:1,
        rowGap:20,
        paddingTop: 20,
    },

    optionsContainer: {
        flex:1/3
    },

    optionsRow: {
        alignItems: 'center',
        flexDirection: 'row',
    },

    text:{
        color:'white',
    },


    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: 'white',
    },

    footerContainer: {
        flex: 1 / 3,
        alignItems: 'center',
    },
})