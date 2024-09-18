import React from 'react';
import useRoutes from '../../hooks/useRoutes';
import useNavigator from '../../hooks/useNavigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../../screens/HomeScreen';
import { MediaScreen } from '../../screens/MediaScreen';
import { GamesScreen } from '../../screens/GamesScreen';
import { ReportsScreen } from '../../screens/ReportsScreen';
import { AccountScreen } from '../../screens/AccountScreen';
import { constants } from '../../utility/cache';
import { ImgIcons } from '../../assets/style/ImgIcons';

/***
 * Initially, we implemented the App's bottom tabs
 * to use react-native-vector-icons
 * but the selected Icons did not meet the
 * faithfulness required in the instructions.
 * To resolve this, we created a custom ImgIcon 
 * Component that uses images from the figma.
 * Although these icons are not of high resolution,
 * we seek to make sure that we adhere to the provided
 * instructions.
 * ***/
export const AppBottomTabsNav: React.FC = (): React.JSX.Element => {
  const {
    HOME,
    MEDIA,
    GAMES,
    REPORTS,
    ACCOUNT
  } = useRoutes();

  const Tab = createBottomTabNavigator();
  const { currentRouteName } = useNavigator();


  return (
    <Tab.Navigator 
      initialRouteName={HOME}
      screenOptions={({ route }) => {
        return {
        tabBarItemStyle:{
            borderTopWidth: (currentRouteName === route.name)? 3: 0,
            borderTopColor:  (currentRouteName === MEDIA) ? '#FFFFFF': '#3361BA',
            borderTopStartRadius: 8,
            borderTopEndRadius: 8
          },
          tabBarActiveTintColor: (currentRouteName === MEDIA) ? '#FFFFFF': '#3361BA',
          tabBarInactiveTintColor: (currentRouteName === MEDIA) ? '#FFFFFF': '#0A0A0A',
        tabBarStyle: {
          position: (currentRouteName === MEDIA) ? 'absolute': 'relative',
          backgroundColor: (currentRouteName === MEDIA) ? '#0A0A0A': '#FFFFFF',
          borderTopWidth: (currentRouteName === MEDIA)? 0: .2
        }
      }}}
      >
      <Tab.Screen 
        name={HOME} 
        component={HomeScreen} 
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => {

            return focused ? <ImgIcons 
              size={{
                width: constants.default_icon_size, 
                height: constants.default_icon_size
              }} 
              icon={require('../../assets/hblue.png')}
              style={{
                maxHeight: constants.profile_height,
                maxWidth: constants.profile_width
              }}
            />: ((currentRouteName === MEDIA) ? <ImgIcons 
              size={{
                width: constants.default_icon_size, 
                height: constants.default_icon_size
              }} 
              icon={require('../../assets/hwhite.png')}
              style={{
                maxHeight: constants.profile_height,
                maxWidth: constants.profile_width
              }} 
            />: <ImgIcons 
              size={{
                width: constants.default_icon_size, 
                height: constants.default_icon_size
              }} 
              icon={require('../../assets/hblack.png')}
              style={{
                maxHeight: constants.profile_height,
                maxWidth: constants.profile_width
              }}
            />); 
          }
        }}
        />
      <Tab.Screen 
        name={MEDIA} 
        component={MediaScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Media',
          tabBarIcon: ({ color, focused }) => {
            return focused ? <ImgIcons 
              size={{
                width: constants.profile_width, 
                height: constants.profile_height
              }} 
              icon={require('../../assets/mwhite.png')}
              style={{
                maxHeight: constants.profile_height,
                maxWidth: constants.profile_width
              }} 
            />: (<ImgIcons 
              size={{
                width: constants.profile_width, 
                height: constants.profile_height
              }} 
              icon={require('../../assets/mblack.png')}
              style={{
                maxHeight: constants.profile_height,
                maxWidth: constants.profile_width
              }}
            />); 
          }
        }} 
        />
      <Tab.Screen 
        name={GAMES} 
        component={GamesScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Games',
          tabBarIcon: ({ color, focused }) => {
            return focused ? <ImgIcons 
              size={{
                width: constants.profile_width, 
                height: constants.profile_height
              }} 
              icon={require('../../assets/gblue.png')}
              style={{
                maxHeight: constants.profile_height,
                maxWidth: constants.profile_width
              }} 
            />: ((currentRouteName === MEDIA) ? <ImgIcons 
              size={{
                width: constants.profile_width, 
                height: constants.profile_height
              }} 
              icon={require('../../assets/gwhite.png')}
              style={{
                maxHeight: constants.profile_height,
                maxWidth: constants.profile_width
              }}  
            />: <ImgIcons 
              size={{
                width: constants.profile_width, 
                height: constants.profile_height
              }} 
              icon={require('../../assets/gblack.png')}
              style={{
                maxHeight: constants.profile_height,
                maxWidth: constants.profile_width
              }}  
            />); 
          }
        }} 
        />
      <Tab.Screen 
        name={REPORTS} 
        component={ReportsScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Reports',
          tabBarIcon: ({ color, focused }) => {
            return focused ? <ImgIcons 
              size={{
                width: constants.profile_width, 
                height: constants.profile_height
              }} 
              icon={require('../../assets/rblue.png')}
              style={{
                maxHeight: constants.profile_width,
                maxWidth:  constants.profile_height
              }} 
            />: ((currentRouteName === MEDIA) ? <ImgIcons 
              size={{
                width: constants.profile_width, 
                height: constants.profile_height
              }} 
              icon={require('../../assets/rwhite.png')}
              style={{
                maxHeight: constants.profile_width,
                maxWidth:  constants.profile_height
              }}
            />: <ImgIcons 
              size={{
                width: constants.profile_width, 
                height: constants.profile_height
              }} 
              icon={require('../../assets/rblack.png')}
              style={{
                maxHeight: constants.profile_width,
                maxWidth:  constants.profile_height
              }} 
            />); 
          }
        }} 
        />
      <Tab.Screen 
        name={ACCOUNT} 
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, focused }) => {
            return <ImgIcons 
              size={{
                width: constants.profile_width, 
                height: constants.profile_height
              }} 
              icon={require('../../assets/profile.png')}
              style={{
                maxHeight: constants.profile_height,
                maxWidth: constants.profile_width
              }}
            />
          }
        }} 
        />
    </Tab.Navigator>
  )

}