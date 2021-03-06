import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile97771Navigator from '../features/UserProfile97771/navigator';
import Tutorial97770Navigator from '../features/Tutorial97770/navigator';
import NotificationList97742Navigator from '../features/NotificationList97742/navigator';
import Settings97741Navigator from '../features/Settings97741/navigator';
import Settings97733Navigator from '../features/Settings97733/navigator';
import UserProfile97731Navigator from '../features/UserProfile97731/navigator';
import BlankScreen097709Navigator from '../features/BlankScreen097709/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile97771: { screen: UserProfile97771Navigator },
Tutorial97770: { screen: Tutorial97770Navigator },
NotificationList97742: { screen: NotificationList97742Navigator },
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
