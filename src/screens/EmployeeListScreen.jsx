import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import {useNavigation} from '@react-navigation/native';
import EmployeeCard from '../components/EmployeeCard';
import Popover from 'react-native-popover-view';

const EmployeeListScreen = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  let employees1 = useSelector(state => state.employees);
  const [employees, setEmployees] = useState(employees1);

  const navigation = useNavigation();
  const sortEmployees = fieldToSort => {
    setEmployees(
      [...employees].sort((a, b) =>
        a[fieldToSort].localeCompare(b[fieldToSort]),
      ),
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.openDrawer()}>
          <FontAwesomeIcon size={32} icon={faBars} />
        </Pressable>
        <Text style={styles.title}>Inbox</Text>
        <Popover
          isVisible={isMenuOpen}
          from={
            <Pressable onPress={toggleMenu}>
              <FontAwesomeIcon size={32} icon={faEllipsisVertical} />
            </Pressable>
          }>
          <View style={{padding: 20, gap: 20}}>
            <Text style={{padding: 10}}>Sort by:</Text>
            <TouchableOpacity
              onPress={() => {
                sortEmployees('firstName');
                setIsMenuOpen(false);
              }}
              style={{}}>
              <Text>First Name</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                sortEmployees('lastName');
                setIsMenuOpen(false);
              }}
              style={{}}>
              <Text>Last Name</Text>
            </TouchableOpacity>
          </View>
        </Popover>
      </View>
      <View style={styles.userBox}>
        <FlatList
          data={employees}
          renderItem={({item}) => {
            return <EmployeeCard employee={item} />;
          }}
          keyExtractor={(item, index) => 'key' + index}
        />
      </View>
      <View style={styles.addButton}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Text style={styles.addButtonIcon}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default EmployeeListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
  },
  userBox: {
    marginVertical: 16,
  },
  header: {
    backgroundColor: '#29a329',
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 32,
    // fontWeight: '500',
    color: '#000',
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#29a329',
    position: 'absolute',
    bottom: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonIcon: {
    fontSize: 40,
  },
});
