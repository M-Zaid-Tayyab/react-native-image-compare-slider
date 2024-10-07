## Demo

[Click to watch the demo](https://drive.google.com/file/d/1H48izffUdaRE1ZLLwwxEQBWprIaKpGdA/view?usp=sharing)



## Installation

Installation with npm

```bash
  npm install react-native-image-compare-slider
```
Installation with yarn

```bash
  yarn add react-native-image-compare-slider
```
Make sure to install following dependencies

```bash
  react-native-gesture-handler react-native-reanimated react-native-responsive-screen
```
## Props
- **`image1`** (`ImageSource`, Required): The source of the first image (on the left side of the slider).
- **`image2`** (`ImageSource`, Required): The source of the second image (on the right side of the slider).
- **`slider`** (`ImageSource`, Required): The slider image between the two images.
- **`style`** (`ViewStyle`, Optional): Custom styles for the slider container.
- **`image1Style`** (`ImageStyle`, Required): Custom styles for the first image (left image).
- **`image2Style`** (`ImageStyle`, Required): Custom styles for the second image (right image).
- **`sliderWidth`** (`Number`, Required): Width value for the slider image.
- **`sliderHeight`** (`Number`, Required): Height value for the slider image.
- **`screenNormalizingValue`** (`Number`, Optional): Threshold value for the right side screen (Till where can slider move).
## Usage/Examples

```javascript
import ImageCompareSlider from 'react-native-image-compare-slider';

function App() {
  return 
  (
      <ImageCompareSlider
        image1={require('./imageAfter.png')}
        image2={require('./imageBefore.png')}
        image1Style={{height: '50%',width:'100%'}}
        image2Style={{height: '50%',width:'100%'}}
        slider={require('./slider.png')}
        sliderHeight={200}
        sliderWidth={15}
      />
   )
}
```

