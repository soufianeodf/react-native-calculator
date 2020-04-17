import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Calculator from '../Components/Calculator';

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
    <Drawer.Navigator>
      <Drawer.Screen name="calculator" component={Calculator} />
    </Drawer.Navigator>
);

export default () => (
  <NavigationContainer>
    <DrawerScreen />
  </NavigationContainer>
);
