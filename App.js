import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView , StatusBar , Text , View } from 'react-native'
import colors from './App/Constants/colors'
import fonts from './App/Constants/fontFamilies'
import RootStack from './App/StackNavigator'

const App = () => {
  return (
    <SafeAreaView style = {{ flex : 1 , backgroundColor : colors.WHITE }}>
      <StatusBar backgroundColor = {colors.WHITE} barStyle = 'dark-content' />
        <NavigationContainer>
          <View style = {{ flex : 1 }}>
            <RootStack />
          </View>
        </NavigationContainer>
    </SafeAreaView>
  )
}

export default App