import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const CustomDrawerContent = () => {
  const employees = useSelector(state => state.employees);
  const favoriteEmployees = employees.filter(
    employee => employee.favorite === true,
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.countContainer}>
        <View>
          <Text style={styles.text}>Total Employees:</Text>
          <Text style={styles.text}>{employees.length}</Text>
        </View>
        <View>
          <Text style={styles.text}>Favorite Employees:</Text>
          <Text style={styles.text}>{favoriteEmployees.length}</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
  },
  text: {
    fontSize: 20,
  },
  countContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
});
