import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Homescreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddEmployee')}>
            <Text style={styles.buttonTitle}>ADD EMPLOYEE</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Homescreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        backgroundColor:'#62C960'
    },
    addButton: {
        padding: 20,
        marginHorizontal:'8%',
        alignItems:'center',
        borderRadius: 5,
        opacity: 1,
        backgroundColor: '#58AB56'
    },
    buttonTitle: {
        fontSize: 20,
        fontWeight: '500',
        color: '#ffff'
    }
})