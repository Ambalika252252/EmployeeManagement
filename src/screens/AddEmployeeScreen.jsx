import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {addEmployee} from '../store/employeeSlice';
import {useDispatch} from 'react-redux';
// import {ScrollView} from 'react-native-safe-area-context';

const AddEmployeeScreen = ({navigation}) => {
  const [error, setError] = useState(false);
  const [employeeData, setEmployeeData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    salary: '',
  });

  const dispatch = useDispatch();

  const handleSave = () => {
    for (const key in employeeData) {
      if (employeeData[key].trim() === '') {
        setError(true);
        return;
      }
    }

    // All fields are filled, so add the employee
    const newEmployee = {
      ...employeeData,
      favorite: false,
    };

    dispatch(addEmployee(newEmployee));
    navigation.navigate('EmployeeList');
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Enter employee details</Text>

        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.inputBox}
          value={employeeData.firstName}
          onChangeText={text => {
            setError(false);
            setEmployeeData({...employeeData, firstName: text});
          }}
        />
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            setError(false);
            setEmployeeData({...employeeData, lastName: text});
          }}
          value={employeeData.lastName}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            setError(false);
            setEmployeeData({...employeeData, email: text});
          }}
          value={employeeData.email}
        />
        <Text style={styles.label}>Job Title</Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            setError(false);
            setEmployeeData({...employeeData, jobTitle: text});
          }}
          value={employeeData.jobTitle}
        />
        <Text style={styles.label}>Salary</Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            setError(false);
            setEmployeeData({...employeeData, salary: text});
          }}
          value={employeeData.salary}
          keyboardType="numeric"
        />
        {error ? (
          <Text style={styles.errorMsg}>Every field is mandatory!!</Text>
        ) : (
          <></>
        )}
        <Pressable style={styles.submitButton} onPress={handleSave}>
          <Text style={styles.submitText}>Save</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default AddEmployeeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingHorizontal: '5%',
    flexGrow: Dimensions.get('window').height,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#62C960',
    textAlign: 'center',
    marginVertical: '15%',
  },
  label: {
    fontWeight: '500',
    fontSize: 16,
    color: 'gray',
    marginHorizontal: 20,
  },
  inputBox: {
    borderBottomWidth: 2,
    marginBottom: 20,
    height: 50,
    borderColor: '#62C960',
    marginHorizontal: 20,
  },
  submitButton: {
    padding: 8,
    backgroundColor: '#62C960',
    alignItems: 'center',
    borderRadius: 5,
    top: 50,
    marginBottom: 100,
  },
  submitText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#ffff',
  },
  errorMsg: {
    textAlign: 'center',
    color: 'red',
  },
});
