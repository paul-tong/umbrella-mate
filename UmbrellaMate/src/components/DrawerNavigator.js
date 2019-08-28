import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import {AppColors} from '../styles/baseStyle';
import LogIn from './LogIn';
import HomePage from './HomePage';
import TripHistory from './TripHistory';
import TripForm from './TripForm';
import FindMate from './FindMate';
import MateList from './MateList';
import Invitations from './Invitations';
import Review from './Review';
import CurrentSharing from './CurrentSharing';

// drawer navigator
const DrawerNavigator = createDrawerNavigator(
  {
    LogIn: {
      screen: LogIn,
      navigationOptions: {
        drawerLabel: ()=>null, // hide the
      }
    },
    HomePage: { // HomePage is the key that refers to
      screen: HomePage,
      navigationOptions: {
        title: 'Home', // set the title display in drawer
      }
    },
    CurrentSharing: {
      screen: CurrentSharing,
      navigationOptions: {
        title: 'Current Sharing',
      }
    },
    TripHistory: { 
      screen: TripHistory,
      navigationOptions: {
        title: 'History Trips', 
      }
    },
    Upgrade: { 
      screen: HomePage,
      navigationOptions: {
        title: 'Upgrade', 
      }
    },
    LogOut: { 
      screen: LogIn,
      navigationOptions: {
        title: 'Log Out', 
      }
    },
    TripForm: {
      screen: TripForm,
      navigationOptions: {
        drawerLabel: ()=>null,
      }
    },
    FindMate: {
      screen: FindMate,
      navigationOptions: {
        title: 'Finging Mate(test)',
      }
    },
    MateList: {
      screen: MateList,
      navigationOptions: {
        drawerLabel: ()=>null,
      }
    },
    Invitations: {
      screen: Invitations,
      navigationOptions: {
        drawerLabel: ()=>null,
      }
    },
    Review: {
      screen: Review,
      navigationOptions: {
        drawerLabel: ()=>null,
      }
    },
  },
  {
    hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: AppColors.theme,
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: AppColors.theme,
    },
  }
);

export default createAppContainer(DrawerNavigator);