import { Icon, Input } from 'native-base'
import React, { useRef, useState } from 'react'
import { View, Text, Image, FlatList, StyleSheet, Alert , Animated, TouchableOpacity , TouchableWithoutFeedback } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import colors from '../../Constants/colors'
import styles from './styles'
import BottomSheet from 'react-native-raw-bottom-sheet'
import { width } from '../../Constants/dimensions'
import fonts from '../../Constants/fontFamilies'

const DATA = [
    { country : 'Iran' , id : 0 },
    { country : 'Israel' , id : 1 },
    { country : 'India' , id : 2 },
    { country : 'Indonesia' , id : 3 },
    { country : 'Isle of Man' , id : 4 },
    { country : 'Italy' , id : 5 },
    { country : 'Iceland' , id : 6 },
    { country : 'Ireland' , id : 7 },
]
const LANGUAGES = [
    { language : 'Hindi' , id : 0 },
    { language : 'English' , id : 1 },
    { language : 'Arabic' , id : 2 },
    { language : 'Chinese' , id : 3 },
    { language : 'Russian' , id : 4 },
    { language : 'Korean' , id : 5 },
    { language : 'Japanese' , id : 6 },
    { language : 'Espanol' , id : 7 },
    { language : 'French' , id : 8 },
]
const ITEM_HEIGHT = 42

const Registration = () => {

    const [isCountrySelected, setIsCountrySelected] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(true)
    const [country, setCountry] = useState('')
    const [language, setLanguage] = useState('')

    const sheetRef = useRef()
    const languageSheetRef = useRef()

    const renderItem = ({ item }) => {
        return (
            <View style = {{ height : ITEM_HEIGHT , marginBottom : '2%' , borderBottomColor : country === item.country ? colors.BORDER_COLOR : 'white' , borderBottomWidth : 1 , borderTopColor : country === item.country ? colors.BORDER_COLOR : 'white' , borderTopWidth : 1 }}>
                <TouchableOpacity
                    onPress = {() => setCountry(item.country)}
                    style = {{ width , height : '100%' , alignItems : "center" , justifyContent : 'center' }}
                    activeOpacity = {.9}
                >
                    <Text style = {{ fontFamily : fonts.regular , fontSize : 17 , letterSpacing : .6 , color : country === item.country ? colors.BLACK : colors.BORDER_COLOR }}>{item.country}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style = {{ flex : 1 , backgroundColor : colors.WHITE }}>
            <View style = {styles.innerHeader}>
                <Image
                    source = {require('../../assets/images/worldMap1.png')}
                    style = {{ width : '100%' , height : 200 }}
                />
                <View style = {styles.logoContainer}>
                    <Text style = {[styles.logoText , { color : colors.NEON_ORANGE }]}>Knowledge</Text>
                    <Text style = {[styles.logoText , { color : colors.PRIMARY_BLUE }]}>Way</Text>
                </View>

                <View style = {styles.inputsContainer}>

                    <BottomSheet
                        ref = {sheetRef}
                        dragFromTopOnly
                        closeOnDragDown = {true}
                        customStyles = {{
                            container : {
                                borderTopLeftRadius : 20,
                                borderTopRightRadius : 20,
                            },
                            draggableIcon : {
                                width : '9%',
                            },
                        }}
                    >
                        <View style = {{ flex : 1 }}>
                            <FlatList
                                data = {DATA}
                                keyExtractor = { item => item.id }
                                renderItem = {renderItem}
                            />
                        </View>
                        <View>
                            <TouchableRipple
                                style = {styles.countrySubmitButton}
                                onPress = {() => sheetRef.current.close()}
                            >
                                <Text style = {styles.submitText}>SELECT</Text>
                            </TouchableRipple>
                        </View>
                    </BottomSheet>

                    <BottomSheet
                        ref = {languageSheetRef}
                        dragFromTopOnly
                        closeOnDragDown = {true}
                        customStyles = {{
                            container : {
                                borderTopLeftRadius : 20,
                                borderTopRightRadius : 20,
                            },
                            draggableIcon : {
                                width : '9%',
                            },
                        }}
                    >
                        <View style = {{ flex : 1 }}>
                            <FlatList
                                data = {LANGUAGES}
                                keyExtractor = { item => item.id }
                                style = {{ paddingBottom : '2%' }}
                                renderItem = {({ item }) => {
                                    return (
                                        <View style = {{ height : ITEM_HEIGHT , marginBottom : '2%' , borderBottomColor : language === item.language ? colors.BORDER_COLOR : 'white' , borderBottomWidth : 1 , borderTopColor : language === item.language ? colors.BORDER_COLOR : 'white' , borderTopWidth : 1 }}>
                                            <TouchableOpacity
                                                onPress = {() => setLanguage(item.language)}
                                                style = {{ width , height : '100%' , alignItems : "center" , justifyContent : 'center' }}
                                                activeOpacity = {.9}
                                            >
                                                <Text style = {{ fontFamily : fonts.regular , fontSize : 17 , letterSpacing : .6 , color : language === item.language ? colors.BLACK : colors.BORDER_COLOR }}>{item.language}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                }}
                            />
                        </View>
                        <View>
                            <TouchableRipple
                                style = {styles.countrySubmitButton}
                                onPress = {() => languageSheetRef.current.close()}
                            >
                                <Text style = {styles.submitText}>SELECT</Text>
                            </TouchableRipple>
                        </View>
                    </BottomSheet>


                    <View style = {{ flexDirection : 'row' , alignItems : 'center' , width : '100%' , paddingLeft : '3%' , marginBottom : '2%' , display : country ? 'flex' : 'none' }}>
                        <Icon
                            active
                            type = 'FontAwesome5'
                            name = 'globe-americas'
                            style = {{ color : colors.DUSKY_BLACK_TEXT , marginRight : '3%' , fontSize : 22 }}
                        />
                        <Text style = {styles.selectCountryText}>Select your country</Text>
                    </View>

                    <View style = {{ marginBottom : '6%' }}>
                        <TouchableWithoutFeedback onPress = {() => sheetRef.current.open()} style = {{ backgroundColor : 'red' }}>
                            <View style = {styles.countryInput}>
                                <Icon
                                    active
                                    type = 'FontAwesome5'
                                    name = 'globe-americas'
                                    style = {{ color : colors.DUSKY_BLACK_TEXT , marginRight : '3%' , fontSize : 22 , display : country ? 'none' : 'flex' }}
                                />
                                <Input
                                    placeholder = 'Select your country'
                                    editable = {false}
                                    style = {styles.selectCountryText}
                                    value = {country}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                    <View style = {{ flexDirection : 'row' , alignItems : 'center' , width : '100%' , paddingLeft : '3%' , marginBottom : '2%' , display : language ? 'flex' : 'none' }}>
                        <Icon
                            active
                            type = 'SimpleLineIcons'
                            name = 'globe'
                            style = {{ color : colors.DUSKY_BLACK_TEXT , marginRight : '3%' , fontSize : 22 }}
                        />
                        <Text style = {styles.selectCountryText}>Select a language</Text>
                    </View>

                    <View>
                        <TouchableWithoutFeedback onPress = {() => languageSheetRef.current.open()} style = {{ backgroundColor : 'red' }}>
                            <View style = {styles.countryInput}>
                                <Icon
                                    active
                                    type = 'SimpleLineIcons'
                                    name = 'globe'
                                    style = {{ color : colors.DUSKY_BLACK_TEXT , marginRight : '3%' , fontSize : 22 , display : language ? 'none' : 'flex' }}
                                />
                                <Input
                                    placeholder = 'Select a language'
                                    editable = {false}
                                    style = {styles.selectCountryText}
                                    value = {language}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                </View>
            </View>
        </View>
    )
}

export default Registration