import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings97741Navigator from '../features/Settings97741/navigator';
import Settings97733Navigator from '../features/Settings97733/navigator';
import UserProfile97731Navigator from '../features/UserProfile97731/navigator';
import BlankScreen097709Navigator from '../features/BlankScreen097709/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings97741: { screen: Settings97741Navigator },
Settings97733: { screen: Settings97733Navigator },
UserProfile97731: { screen: UserProfile97731Navigator },
BlankScreen097709: { screen: BlankScreen097709Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
