# React Native BoilerPlate 2019 - (Marzo 19)

- React Native version: 0.56.0
- React Native navigation from Wix 2.0
- Font: _Nunito_

## Getting started

```
$ yarn install

$ react-native link ./assets/fonts
```

## Rename project

### Install React Native Rename Globaly

```
$ yarn global add react-native-rename
```

### Rename the project

```
$ react-native-rename <newName>
```

## launch iOS

`$ react-native run-ios`

`ios && pod install`

###### If you have an Error at building app iOS (Mac's Xcode 10 users)

Go to Xcode, File -> Project Settings then change the Build System Default to Legacy Build System.

## launch Android

`$ react-native run-android`

## Libreries used

###### Flux architecture

- [Redux](https://redux.js.org/introduction)

###### Routing and navigation

- [React Native Navigtation from Wix V2](https://github.com/wix/react-native-navigation)

###### Version control

- [Pre Commit](https://github.com/pre-commit/pre-commit)

## Style guidelines

- https://eslint.org/
- https://github.com/airbnb/javascript
- https://github.com/airbnb/javascript/tree/master/react
- https://prettier.io/

:v: **Enjoy!**
