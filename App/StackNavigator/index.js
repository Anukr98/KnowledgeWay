import React from 'react'
import { createStackNavigator , CardStyleInterpolators } from '@react-navigation/stack'
import Splash from './Splash/Splash'
import RegistrationDashboard from './RegistrationDashboard/RegistrationDashboard'
import Registration from './Registration/Registration'

const Stack = createStackNavigator()

const RootStack = () => {
    return (
        <Stack.Navigator
            headerMode = 'none'
        >
            <Stack.Screen name = 'Splash' component = {Splash} />
            <Stack.Screen name = 'RegistrationDash' component = {RegistrationDashboard} />
            <Stack.Screen name = 'Registration' component = {Registration} />
        </Stack.Navigator>
    )
}

export default RootStack
