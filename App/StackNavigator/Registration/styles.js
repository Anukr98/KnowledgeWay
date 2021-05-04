import { StyleSheet } from 'react-native'
import colors from '../../Constants/colors'
import fonts from '../../Constants/fontFamilies'

const styles = StyleSheet.create({
    innerHeader : {
        width : '90%',
        alignSelf : 'center',
        flex : 1,
        position : 'relative'
    },

    logoContainer : {
        flexDirection : 'row',
        alignItems : "center",
        justifyContent : "center"
    },

    logoText : {
        fontFamily : fonts.bold,
        fontSize : 30
    },

    inputsContainer : {
        position : 'absolute',
        bottom : 10,
        width : '100%'
    },

    selectCountryText : {
        color : colors.DUSKY_BLACK_TEXT,
        fontFamily : fonts.semiBold,
        fontSize : 18
    },

    countryInput : {
        backgroundColor : colors.LIGHT_GRAY_BG,
        borderBottomColor : colors.WHITE,
        borderRadius : 14,
        paddingLeft : '3%',
        flexDirection : 'row',
        alignItems : 'center' 
    },

    countrySubmitButton : {
        backgroundColor : colors.NEON_ORANGE,
        alignItems : 'center',
        justifyContent : 'center',
        paddingVertical : '2.6%',
        width : '80%',
        alignSelf : 'center',
        borderRadius : 999,
        marginVertical : '2%'
    },

    submitText : {
        fontFamily : fonts.semiBold,
        fontSize : 18,
        color : colors.WHITE
    }
})

export default styles