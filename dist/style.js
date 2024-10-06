"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = void 0;
var react_native_1 = require("react-native");
var react_native_responsive_screen_1 = require("react-native-responsive-screen");
exports.styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        overflow: 'hidden',
    },
    image2: {
        resizeMode: 'cover',
        width: (0, react_native_responsive_screen_1.widthPercentageToDP)(100),
        height: (0, react_native_responsive_screen_1.heightPercentageToDP)(60),
    },
    image1: {
        resizeMode: 'cover',
        width: (0, react_native_responsive_screen_1.widthPercentageToDP)(100),
        height: (0, react_native_responsive_screen_1.heightPercentageToDP)(60),
        position: 'absolute',
    },
    overlay: {
        position: 'absolute',
        height: '100%',
        overflow: 'hidden',
    },
    slider: {
        position: 'absolute',
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
