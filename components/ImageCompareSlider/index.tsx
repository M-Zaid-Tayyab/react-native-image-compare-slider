import React from "react";
import { Dimensions, Image, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { styles } from "./style";
import { Props } from "./types";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const ImageCompareSlider = ({
  image1,
  image2,
  slider,
  style,
  image1Style,
  image2Style,
  sliderWidth,
  sliderHeight,
  screenNormalizingValue,
}: Props) => {
  const upperBound =
    SCREEN_WIDTH -
    sliderWidth -
    (screenNormalizingValue ? screenNormalizingValue : wp(2.8));
  const lowerBound = 0;
  const translationX = useSharedValue(SCREEN_WIDTH / 2);

  const gesture = Gesture.Pan().onUpdate((event) => {
    "worklet";
    const newTranslationX = event.absoluteX;
    if (newTranslationX < upperBound && newTranslationX > lowerBound) {
      translationX.value = newTranslationX;
    }
  });

  const animatedOverlayStyle = useAnimatedStyle(() => ({
    width: translationX.value,
  }));

  const animatedSliderStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translationX.value - sliderWidth / 2 }],
  }));

  return (
    <View style={[styles.container, style]}>
      <Image source={image2} style={[styles.image2, image1Style]} />
      <Animated.View style={[styles.overlay, animatedOverlayStyle]}>
        <Image source={image1} style={[styles.image1, image2Style]} />
      </Animated.View>
      <GestureDetector gesture={gesture}>
        <Animated.Image
          source={slider}
          style={[
            animatedSliderStyle,
            {
              position: "absolute",
              width: sliderWidth ? sliderWidth : wp(6),
              height: sliderHeight ? sliderHeight : hp(100),
            },
          ]}
          resizeMode="stretch"
        />
      </GestureDetector>
    </View>
  );
};

export default ImageCompareSlider;
