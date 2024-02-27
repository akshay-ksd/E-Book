import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import styles from './style'
import {
    Gesture,
    GestureDetector,
    GestureHandlerRootView,
    PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
    Extrapolation,
    interpolate,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withDecay,
    withSpring,
    withTiming,
} from 'react-native-reanimated';

const { height } = Dimensions.get("window");

const Player = () => {
    const pressed = useSharedValue(false);
    const offset = useSharedValue(50);
    const AnimatedImage = Animated.createAnimatedComponent(Image)

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [
            { translateY: offset.value },
        ],
        backgroundColor: "rgba(58, 58, 58, 1)",
        height: height - 100,
    }));

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.startY = offset.value;
        },
        onActive: (event, ctx) => {
            if ((ctx.startY + event.translationY) > 49) {
                if ((ctx.startY + event.translationY) < height - (height / 5))
                    offset.value = withSpring(ctx.startY + event.translationY);
            }
        },
        onEnd: (_) => {
            if (height / 2 < offset.value) {
                offset.value = withTiming(height - (height / 5), { duration: 500 })
            } else {
                offset.value = withTiming(50, { duration: 500 })
            }
        },
    });

    const imageStyle = useAnimatedStyle(() => ({
        transform: [{ scale: interpolate(offset.value, [0, 100,300,490,600], [5,3.5,2.5,1.5,0.8], Extrapolation.CLAMP) }],
        left:interpolate(offset.value, [0, 600], [180,0], Extrapolation.CLAMP) ,
        top:interpolate(offset.value, [0, 600], [170,0], Extrapolation.CLAMP) 
    }));

    return (
        <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View style={[styles.container, animatedStyles]}>
                <AnimatedImage source={{ uri: "https://s.saregama.tech/image/s/fw_800/9/c1/60/rocky-aur-rani_805x384_website-banner_1690783534.jpg" }} 
                       style={[styles.image,imageStyle]} />
                <View>
                    <Text>Music Name</Text>
                    <Text>Music Details</Text>
                </View>
            </Animated.View>
        </PanGestureHandler>
    )
}

export default Player