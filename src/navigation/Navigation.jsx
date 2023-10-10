import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homescreen from '../screens/Homescreen';
import AddEmployeeScreen from '../screens/AddEmployeeScreen';
import EmployeeListScreen from '../screens/EmployeeListScreen';
import DrawerNavigator from './DrawerNavigator';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  const employees = useSelector(state => state.employees);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={employees.length === 0 ? 'Home' : 'EmployeeList'}>
        <Stack.Screen
          name="Home"
          component={Homescreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddEmployee"
          component={AddEmployeeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EmployeeList"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
