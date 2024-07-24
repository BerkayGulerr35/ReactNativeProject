import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TimePicker = () => {
  const [selectedTime, setSelectedTime] = useState('');

  const handleTimeChange = (time) => {
    // Burada seçilen saati kullanabilirsiniz.
    setSelectedTime(time);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Teslimat adresi seçiniz</Text>
      <View style={styles.inputContainer}>
        <MaterialIcons name="location-on" size={28} color='#F9CA24' style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Adres Seçiniz"
          value={selectedTime}
          onChangeText={handleTimeChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: 0.3,
    borderColor: '#F9CA24',
    borderRadius:50,
    backgroundColor:'white',
    marginBottom:25,
    shadowColor: "#000",
  shadowOffset: {
     width: 4,
     height: 4,
  },
  shadowOpacity: 0.28,
  shadowRadius: 10.65,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginLeft:8
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default TimePicker;
