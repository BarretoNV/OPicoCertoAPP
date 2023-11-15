// No arquivo Routes.js

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/home';
import CityDetails from './pages/CityDetails';

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          initialParams: {
            navigateAfterDelay: true,
          },
        }}
      />
      <Tab.Screen
        name="CityDetails"
        component={CityDetails}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
