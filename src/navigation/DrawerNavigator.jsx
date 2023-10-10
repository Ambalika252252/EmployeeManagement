import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import EmployeeListScreen from '../screens/EmployeeListScreen';
import CustomDrawerContent from '../screens/CustomDrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={CustomDrawerContent}>
      <Drawer.Screen
        name="EmployeeLists"
        component={EmployeeListScreen}
        options={{
          drawerLabel: 'Employee List',
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
