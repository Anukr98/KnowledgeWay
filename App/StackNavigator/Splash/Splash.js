import React , { useEffect } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import colors from '../../Constants/colors'
import { height, width } from '../../Constants/dimensions'
import fonts from '../../Constants/fontFamilies'

const Splash = props => {

    useEffect(() => {
        let t = setTimeout(() => {
            clearTimeout(t)
            props.navigation.replace('RegistrationDash')
        },1000)
    },[])

    return (
        <View style = {{ flex : 1 , backgroundColor : colors.WHITE , alignItems : "center" , justifyContent : 'center' }}>
            <Image
                source = {require('../../assets/images/splash.png')}
                style = {{ height : height/4 , width , justifyContent : 'flex-end' , marginTop : '-50%'}}
            />
            <Text style = {{ fontFamily : fonts.bold , fontSize : 35 }}>Knowledge Way</Text>
        </View>
    )
}

export default Splash