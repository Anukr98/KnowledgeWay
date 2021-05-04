import React, { useRef } from 'react'
import { View , Text , Animated , Image , StyleSheet , Pressable, Vibration } from 'react-native'
import { height, width } from '../../Constants/dimensions'
import search from '../../assets/images/search.png'
import register from '../../assets/images/register.png'
import agreement from '../../assets/images/agreement.png'
import styles from './styles'
import colors from '../../Constants/colors'
import { useNavigation } from '@react-navigation/native'
import ReactNativeHapticFeedback from "react-native-haptic-feedback"

const bgs = [colors.PRIMARY , colors.NEON_ORANGE , colors.PRIMARY_BLUE]

const slides = [
    {
        id : 0,
        title : 'Create an Account',
        subtext : 'Manage your account, track your',
        image : register
    },
    {
        id : 1,
        title : 'Choose suitable category',
        subtext : 'Choose your category, change',
        image : agreement
    },
    {
        id : 2,
        title : 'Search for tutors',
        subtext : 'Search for tutors. Filter them and',
        image : search
    }
]

const RegistrationDashboard = () => {

    const scrollX = useRef(new Animated.Value(0)).current
    const listRef = useRef(null)
    const navigation = useNavigation()

    const Indicators = ({ scrollX }) => {
        return (
            <View style = {styles.indicatorContainer}>
                {
                    slides.map((_,i) => {
                        const inputRange = [(i-1)*width , i*width , (i+1)*width]
                        const scale = scrollX.interpolate({
                            inputRange,
                            outputRange : [.8 , 1.4 , .8],
                            extrapolate : 'clamp'
                        })
                        const opacity = scrollX.interpolate({
                            inputRange,
                            outputRange : [.6 , .9 , .6],
                            extrapolate : 'clamp'
                        })
                        return (
                            <Animated.View
                                key = {i}
                                style = {[
                                    styles.dot,
                                    {
                                        opacity,
                                        transform : [{ scale }]
                                    }
                                ]}
                            />
                        )
                    })
                }
            </View>
        )
    }

    const Backdrop = ({ scrollX }) => {
        const backgroundColor = scrollX.interpolate({
            inputRange : bgs.map((_,i) => i * width),
            outputRange : bgs.map(bg => bg)
        })
        return (
            <Animated.View
                style = {[StyleSheet.absoluteFillObject , { backgroundColor }]}
            />
        )
    }

    const AbsoluteSquare = ({ scrollX }) => {

        const swipe = Animated.modulo(
            Animated.divide(
                Animated.modulo(scrollX , width),
                new Animated.Value(width)
            ),1
        )

        const rotate = swipe.interpolate({
            inputRange : [0, .5 , 1],
            outputRange : ['35deg' , '0deg' , '35deg']
        })
        const translateX = swipe.interpolate({
            inputRange : [0, .5 , 1],
            outputRange : [0 , -170 , 0]
        })

        return (
            <Animated.View
                style = {{
                    width : height,
                    height,
                    backgroundColor : colors.WHITE,
                    borderRadius : 86,
                    position : 'absolute',
                    top : -height * .6,
                    left : -height * 0.3,
                    transform : [
                        { rotate },
                        { translateX }
                    ]
                }}
            />
        )
    }

    const renderItem = ({ item , index }) => {
        return (
            <View style = {{ width , alignItems : 'center' }}>
                <View style = {{ flex : .6 }}>
                    <Image
                        source = {item.image}
                        style = {{ width : width * 0.65 , height : height/2 }}
                        resizeMode = 'contain'
                    />
                </View>
                <View style = {styles.textArea}>
                    <View style = {styles.innerTextArea}>
                        <Text style = {styles.title}>{item.title}</Text>
                        <Text style = {styles.subtext}>{item.subtext}</Text>

                        <View style = {styles.buttonArea}>
                            {
                                index !==2
                                    ?
                                <>
                                    <Pressable hitSlop = {30}>
                                        <Text style = {[styles.buttonText , { color : colors.RANGITOTO }]}>Skip</Text>
                                    </Pressable>
                                    <Pressable
                                        onPress = {() => listRef.current.scrollToIndex({
                                            index : index + 1
                                        })}
                                        hitSlop = {30}
                                    >
                                        <Text style = {styles.buttonText}>Next</Text>
                                    </Pressable>
                                </>
                                    :
                                <Pressable style = {styles.submitButton} onPress = {() => navigation.navigate('Registration')}>
                                        <Text style = {styles.submitText}>Get Started</Text>
                                </Pressable>
                            }
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style = {{ flex : 1 , alignItems : 'center' , justifyContent : "center" , backgroundColor : colors.WHITE }}>
            <Backdrop scrollX = {scrollX} />
            <AbsoluteSquare scrollX = {scrollX} />
            <Animated.FlatList
                ref = {listRef}
                data = {slides}
                keyExtractor = { item => item.id.toString() }
                renderItem = {renderItem}
                horizontal
                showsHorizontalScrollIndicator = {false}
                pagingEnabled
                scrollEventThrottle = {32}
                onScroll = {Animated.event(
                    [{ nativeEvent : {contentOffset : {x : scrollX}}}],
                    { useNativeDriver : false }
                )}
            />

            <Indicators scrollX = {scrollX} />
        </View>
    )
}

export default RegistrationDashboard