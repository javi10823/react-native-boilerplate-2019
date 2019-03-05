# React Native BoilerPlate 2019 - (Marzo 19)

<img src="https://lh3.googleusercontent.com/T2Q-h2WaQM1fpwaK25LEuE_uBVXIfxaskXRja_2FMQ0t0Z2-QGbNerokJ0xkW86C0Y-KRDVoai4qCX7yB0fyzCCHu9-uO_-4CMEQRSJK4FAk21cCKFzzhmB--_vfu3sM7G3q5YFIxYb5iqvQhBcZgJwDg_1RnCrzj-5-TxeKn7rPdSHQN3m2ZP7v9fR9UVqofPAhH94sb_t7Rtoky8xdHozbjx4Jgx5Vu93PdoE6qSXVco302woSCl1pJbkwdRAAU6gMnVFpaAIWY-Uh272ErIv_Y95A2YxjmaGMoXh5oFjfY2GoU9cgkSv_TGAITL2AJHNkEGfi08khW7aoXSPPDLJszRm22Dcg7JdmC5O7pxmAu5IxgOu5MQCHBDstQciWI6bTk9W9yahbjNOdp5kBGGsQ_1ELfhbN5_0PFsSu1XPcYC_UqVbRVsGBN_2oNmakgRbnqheX_DkGILFbVmZFIq9TXSqUXgQ1wrLCVvhbmiPdGmydRixK0-vdjR_A2yPRlyoPS78A5cdSRfnBtvwGHeXuDPU4OxaI03SqFQlzWtcfY_QwPoLixTbnKaVn8S6dM_j0FdQjrlInHucIqcRtrbZwlX-_A1LK66oEqiY=w2880-h1530">
<img src="https://lh3.googleusercontent.com/cnZeS4rpZwFo0JhqXi71cZyeVRoMlmFK-klk3uiDlL1vwc5TgQGfm7A9yAuf0trR9f2C75690ICcK0umFGLnziQugcvrAyGEOP9EohvF49ci_L01V8pRkXKXEC1ozvm_rVJJNYjyd6ub_F-7YyklmcPLpPpTzp3y5m7TpBPqGTSU3IwyUorPyqC7NT-u7317NawoqmMxJ5Ae0EvwUbCPJU-M2abd0M0ijw584hVybNsVhYoojyg_hfefGXs8py31c4ZAaQQtnEasZ7X-r-TOmfjPv1QAMDpQwXOLQ54IyABnUTVv_hyqIW_8ND60JxJUe4VY83YwI03QEY8BS3Jrk_lhUrHe58T7i4TnAK9WbBY9ckwgv7biCZh3XT-kXc2-R-Iovt9e-vjhh0rjVYm2D9Wcp2kV9YCo6s1uBf0JWCgjz2Ybd6jsRoTWN0gug3nFrc-rnHabsF_THLbwg1w5gtIx17ZFwhXhSwcUPgh7LKOU66e26N3bFYAElBHU_YKjAeHycyU9123MaleYjfzyQiSUMaA8tXhfCITkGveyJXiynKyk2vReag0HfISDSe6_pHySmh8x0YbPsUC7L7ahTE1gqgzi-QXeFOqBf5A=w2880-h1530">

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

`$ yarn run android-build` (command to generate the necessary bundle for android)

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

TODO:

- Install react-native-vector-icons
- redux example
- redux-form example with material-text-field (validations with spanish/english configuration in config.js)
- login/logout example with asyncStorage example
- actions with await - no use cb
