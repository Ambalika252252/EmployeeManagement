import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {toggleFavorite} from '../store/employeeSlice';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar as faStarSolid} from '@fortawesome/free-solid-svg-icons/faStar';
import {faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons/faStar';

const EmployeeCard = ({employee}) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(
    state => state.employees.find(emp => emp.id === employee.id)?.favorite,
  );
  const handleToggleFavorite = (employeeId, isFavorite) => {
    dispatch(toggleFavorite({id: employeeId, favorite: !isFavorite}));
  };
  return (
    <View style={styles.item}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '80%',
        }}>
        <View style={styles.userImageContainer}>
          <Text style={styles.userImage}>
            {employee.firstName.slice(0, 1)}
            {employee.lastName.slice(0, 1)}
          </Text>
        </View>
        <View style={styles.userContainer}>
          <Text style={styles.userName}>
            {employee.firstName} {employee.lastName}
          </Text>
          <Text style={styles.userDesignation}>{employee.jobTitle}</Text>
        </View>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Pressable
          onPress={() => handleToggleFavorite(employee.id, isFavorite)}>
          {isFavorite ? (
            <FontAwesomeIcon size={40} icon={faStarSolid} color={'gold'} />
          ) : (
            <FontAwesomeIcon size={40} icon={faStarRegular} color={'#000'} />
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default EmployeeCard;

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    gap: 30,
    padding: 20,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    marginBottom: 12,
  },
  userImageContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#29a329',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userImage: {
    textTransform: 'uppercase',
    fontSize: 24,
    fontWeight: '500',
    color: 'black',
  },
  userContainer: {
    paddingLeft: 16,
    display: 'flex',
    flexDirection: 'column',
  },
  userName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  userDesignation: {
    fontSize: 16,
    color: 'gray',
  },
});
