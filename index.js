import { Navigation } from 'react-native-navigation';
import { registerScreens, initApp } from './src/screens';

registerScreens();
Navigation.events().registerAppLaunchedListener(() => initApp());
