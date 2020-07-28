/*Example of SQLite Database in React Native*/
import React from 'react';

//Import react-navigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './pages/HomeScreen';
import RegisterUser from './pages/RegisterUser';
import UpdateUser from './pages/UpdateUser';
import ViewUser from './pages/ViewUser';
import ViewUserId from './pages/ViewUserId';
import ViewAllUser from './pages/ViewAllUser';
import DeleteUser from './pages/DeleteUser';
import LanguageSelectionScreen from './pages/LanguageSelectionScreen';
import {primary} from './variables/colors';

const headerStyles = {
  backgroundColor: primary.header,
  height: 45,
};
const headerTintColor = primary.text;

const AppContainer = createAppContainer(
  createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerStyle: headerStyles,
        headerTintColor: headerTintColor,
      },
    },
    View: {
      screen: ViewUser,
      navigationOptions: {
        headerStyle: headerStyles,
        headerTintColor: headerTintColor,
      },
    },

    ViewId: {
      screen: ViewUserId,
      navigationOptions: {
        headerStyle: headerStyles,
        headerTintColor: headerTintColor,
      },
    },
    ViewAll: {
      screen: ViewAllUser,
      navigationOptions: {
        headerStyle: headerStyles,
        headerTintColor: headerTintColor,
      },
    },
    Update: {
      screen: UpdateUser,
      navigationOptions: {
        headerStyle: headerStyles,
        headerTintColor: headerTintColor,
      },
    },
    Register: {
      screen: RegisterUser,
      navigationOptions: {
        headerStyle: headerStyles,
        headerTintColor: headerTintColor,
      },
    },
    Delete: {
      screen: DeleteUser,
      navigationOptions: {
        headerStyle: headerStyles,
        headerTintColor: headerTintColor,
      },
    },
    Language: {
      screen: LanguageSelectionScreen,
      navigationOptions: {
        headerStyle: headerStyles,
        headerTintColor: headerTintColor,
      },
    },
  }),
);

const App = props => {
  return <AppContainer />;
};

export default App;
