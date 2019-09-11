// eslint-disable-next-line import/named
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ROUTES from '../constants/routeNames';

import Index from '../index';

const AppNavigator = createStackNavigator(
  {
    [ROUTES.SCREENS.MAIN]: {
      screen: Index,
      navigationOptions: {
        header: () => null,
      },
    },
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
