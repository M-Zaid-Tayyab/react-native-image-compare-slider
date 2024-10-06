"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
var react_native_responsive_screen_1 = require("react-native-responsive-screen");
var style_1 = require("./style");
var SCREEN_WIDTH = react_native_1.Dimensions.get("window").width;
var ImageCompareSlider = function (_a) {
    var image1 = _a.image1, image2 = _a.image2, slider = _a.slider, style = _a.style, image1Style = _a.image1Style, image2Style = _a.image2Style, sliderWidth = _a.sliderWidth, sliderHeight = _a.sliderHeight, screenNormalizingValue = _a.screenNormalizingValue;
    var upperBound = SCREEN_WIDTH - (sliderWidth - (0, react_native_responsive_screen_1.widthPercentageToDP)(screenNormalizingValue || 2.8));
    var lowerBound = 0;
    var translationX = (0, react_native_reanimated_1.useSharedValue)(SCREEN_WIDTH / 2);
    var gesture = react_native_gesture_handler_1.Gesture.Pan().onUpdate(function (event) {
        "worklet";
        var newTranslationX = event.absoluteX;
        if (newTranslationX < upperBound && newTranslationX > lowerBound) {
            translationX.value = newTranslationX;
        }
    });
    var animatedOverlayStyle = (0, react_native_reanimated_1.useAnimatedStyle)(function () { return ({
        width: translationX.value,
    }); });
    var animatedSliderStyle = (0, react_native_reanimated_1.useAnimatedStyle)(function () { return ({
        transform: [{ translateX: translationX.value - sliderWidth / 2 }],
    }); });
    return (react_1.default.createElement(react_native_1.View, { style: [style_1.styles.container, style] },
        react_1.default.createElement(react_native_1.Image, { source: image2, style: [style_1.styles.image2, image1Style] }),
        react_1.default.createElement(react_native_reanimated_1.default.View, { style: [style_1.styles.overlay, animatedOverlayStyle] },
            react_1.default.createElement(react_native_1.Image, { source: image1, style: [style_1.styles.image1, image2Style] })),
        react_1.default.createElement(react_native_gesture_handler_1.GestureDetector, { gesture: gesture },
            react_1.default.createElement(react_native_reanimated_1.default.Image, { source: slider, style: [
                    animatedSliderStyle,
                    {
                        position: "absolute",
                        width: sliderWidth ? sliderWidth : (0, react_native_responsive_screen_1.widthPercentageToDP)(6),
                        height: sliderHeight ? sliderHeight : "100%",
                    },
                ], resizeMode: "stretch" }))));
};
exports.default = ImageCompareSlider;
