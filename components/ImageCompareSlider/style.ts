import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  image2: {
    resizeMode: 'cover',
    width: wp(100),
    height: hp(60),
  },
  image1: {
    resizeMode: 'cover',
    width: wp(100),
    height: hp(60),
    position: 'absolute',
  },
  overlay: {
    position: 'absolute',
    height: '100%',
    overflow: 'hidden',
  }
});
