import { Platform, Dimensions } from 'react-native';

export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';

export const isOldAndroid = isAndroid && Platform.Version < 20;

const windowDimensions = Dimensions.get('window');

export const WINDOW_HEIGHT = windowDimensions.height;
export const WINDOW_WIDTH = windowDimensions.width;

export const IS_SMALL_DEVICE = WINDOW_HEIGHT < 570;

export const REFERENCE_WIDTH = 375;
export const REFERENCE_HEIGHT = 667;

const USE_WIDTH = WINDOW_WIDTH / REFERENCE_WIDTH < WINDOW_HEIGHT / REFERENCE_HEIGHT;

export const REF_RATIO = USE_WIDTH
  ? WINDOW_WIDTH / REFERENCE_WIDTH
  : WINDOW_HEIGHT / REFERENCE_HEIGHT;
