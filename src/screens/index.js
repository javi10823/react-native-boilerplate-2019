import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from '../store';
import Welcome from './Welcome';
import WelcomeWithRedux from './WelcomeWithRedux';

export const initApp = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: 'welcome',
        children: [
          {
            component: {
              name: 'welcome',
            },
          },
        ],
      },
    },
  });

export const goToPage = (componentId, page, props) => {
  Navigation.push(componentId, {
    component: {
      name: page,
      passProps: props,
    },
  });
};

export const goBack = componentId => Navigation.pop(componentId);

// register all screens of the app (including internal ones)
// prettier-ignore
export function registerScreens() {
  Navigation.registerComponentWithRedux( 'welcome', () => Welcome, Provider, store );
  Navigation.registerComponentWithRedux( 'welcomeWithRedux', () => WelcomeWithRedux, Provider, store );
}
