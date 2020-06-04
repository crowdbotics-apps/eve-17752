import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings59766Navigator from '../features/Settings59766/navigator';
import UserProfile59759Navigator from '../features/UserProfile59759/navigator';
import Settings59758Navigator from '../features/Settings59758/navigator';
import Settings59756Navigator from '../features/Settings59756/navigator';
import SignIn259754Navigator from '../features/SignIn259754/navigator';
import Settings59738Navigator from '../features/Settings59738/navigator';
import Settings59721Navigator from '../features/Settings59721/navigator';
import Settings59619Navigator from '../features/Settings59619/navigator';
import Settings59602Navigator from '../features/Settings59602/navigator';
import Settings59568Navigator from '../features/Settings59568/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Settings59766: { screen: Settings59766Navigator },
UserProfile59759: { screen: UserProfile59759Navigator },
Settings59758: { screen: Settings59758Navigator },
Settings59756: { screen: Settings59756Navigator },
SignIn259754: { screen: SignIn259754Navigator },
Settings59738: { screen: Settings59738Navigator },
Settings59721: { screen: Settings59721Navigator },
Settings59619: { screen: Settings59619Navigator },
Settings59602: { screen: Settings59602Navigator },
Settings59568: { screen: Settings59568Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
