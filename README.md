My ReactNative app. 
In this project contains components and pages templates, 
also contains work with sqllite database templates.

All examples in code, the sequence of actions can be tracked by commits!

I wanted to use React inside Ionic, 
but almost all components awful works with React and even doesn't work, 
also console commands doesn't work. Angular tool that is not worse than React.

### `JULY 2020`

### `learning difficulty level: 6 of 10`

### DO NOT CLONE THIS APP TO CREATE NEW, for correct use code from this app needs to create new react-native app and put inside code from this example!!!

I start my template with [This good template](https://aboutreact.com/example-of-sqlite-database-in-react-native/)

But this template with `classes` and I remake this to functions


## Installed dependences

When create new react-native app and put code from this repository needs to install that libs:

    npm install react-navigation --save
    npm install react-native-gesture-handler react-native-safe-area-context @react-native-community/masked-view react-native-screens react-native-reanimated --save
    npm install react-navigation-stack --save
    npm install --save styled-components
    npm install react-native-sqlite-storage --save
        
    npm install react-native-localization --save


## Run the app

    react-native run-android

## Localization 

- Localization to headers working if header titles are not set inside App.js
- When used live reload localization is crushed for headers, but in App it will be work.
- `props.navigation.navigate('Home', {token: '<new token>'});` this `new token` needs to reload screen

## Errors can be prevented

- ref - this prop of object returns from inside component and doesn't work with custom components,
because in custom components, like the `paages/components/MyButton` component, app props of this components for only read. 

