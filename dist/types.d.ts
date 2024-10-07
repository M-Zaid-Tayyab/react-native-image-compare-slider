import { ImageSourcePropType, ImageStyle, StyleProp, ViewStyle } from "react-native";
export interface Props {
    image1: ImageSourcePropType;
    image2: ImageSourcePropType;
    slider: ImageSourcePropType;
    image1Style: StyleProp<ImageStyle>;
    image2Style: StyleProp<ImageStyle>;
    style?: StyleProp<ViewStyle>;
    sliderWidth: number;
    sliderHeight: number;
    screenNormalizingValue?: number;
}
