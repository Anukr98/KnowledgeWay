import { StyleSheet } from 'react-native'
import colors from '../../Constants/colors'
import fonts from '../../Constants/fontFamilies'

const styles = StyleSheet.create({

    textArea : {
        flex : .4,
        width : '100%',
        alignItems : "center",
        paddingTop : '4%'
    },

    innerTextArea : {
        width : '90%',
        position : 'relative',
        flex : .85
    },

    title : {
        fontFamily : fonts.semiBold,
        fontSize : 20,
        color : colors.WHITE,
        marginBottom : "3%",
        color : colors.RANGITOTO
    },

    subtext : {
        fontFamily : fonts.bold,
        fontSize : 24,
        // 00A4CCFF
        color : colors.WHITE
    },

    buttonArea : {
        position : 'absolute',
        bottom : 20,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        width : '100%',
        paddingHorizontal : '12%'
    },

    buttonText : {
        fontFamily : fonts.semiBoldr,
        fontSize : 17,
        color : colors.WHITE
    },

    submitButton : {
        backgroundColor : "yellow",
        width : '100%',
        alignItems : 'center',
        borderRadius : 999,
        height : 50,
        justifyContent : 'center',
        backgroundColor : colors.WHITE
    },

    submitText : {
        fontFamily : fonts.regular,
        fontSize : 20
    },

    indicatorContainer : {
        position : 'absolute',
        bottom : 15,
        flexDirection : 'row' 
    },

    dot : {
        height : 7,
        width : 7,
        borderRadius : 5,
        backgroundColor : colors.WHITE,
        margin : 10,
    }
})

export default styles