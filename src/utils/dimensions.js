import { Dimensions, Platform, PixelRatio } from 'react-native';
import { REF_RATIO } from './responsive';

let { height, width } = Dimensions.get('window');

export const H = height;
export const W = width;

// based on iphone 5s's scale
const scale = width / 320;

export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }

  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

export const iPhone8 = () => Platform.OS === 'ios' && width === 375 && height === 667;

export const iPhoneSE = () => Platform.OS === 'ios' && height < 570;

export function responsiveSize(value) {
  return Math.round(value * REF_RATIO);
}

export function responsiveSizePlatForm(iphoneSize, androidSize) {
  return Platform.OS === 'ios' ? responsiveSize(iphoneSize) : responsiveSize(androidSize);
}

export const TAB_BAR_HEIGHT = 48.5;

const IPHONE_X_WIDTH = 375;
const IPHONE_X_HEIGHT = 812;
const IPHONE_XR_XSMAX_WIDTH = 414;
const IPHONE_XR_XSMAX_HEIGHT = 896;

export const isIPhoneX = () => {
  if (Platform.OS === 'web' || Platform.OS === 'android') return false;

  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    ((height === IPHONE_X_HEIGHT && width === IPHONE_X_WIDTH) ||
      (height === IPHONE_X_WIDTH && width === IPHONE_X_HEIGHT) ||
      (height === IPHONE_XR_XSMAX_HEIGHT && width === IPHONE_XR_XSMAX_WIDTH) ||
      (height === IPHONE_XR_XSMAX_WIDTH && width === IPHONE_XR_XSMAX_HEIGHT))
  );
};
