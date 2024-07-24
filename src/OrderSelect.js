import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DeliveryTimeSelection from './DeliveryTime';
import AddressSelection from './AddressSelection';
import Menu from './Menu';

const OrderDetail = ({ navigation }) => {
  const [selectedType, setSelectedType] = useState(null);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.header}>Sipariş Yarat </Text>
        <MaterialIcons style={styles.bell} name="notifications-none" size={24} color="#F9CA24" />
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[styles.option, selectedType === 'paket' && styles.selectedOption]}
          onPress={() => setSelectedType('paket')}
        >
          <Text style={styles.optionText}>Paket Teslimat</Text>
          {selectedType === 'paket' && <MaterialIcons name="check" size={25} style={styles.selectedIcon} />}
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.option, selectedType === 'gelal' && styles.selectedOption]}
          onPress={() => setSelectedType('gelal')}
        >
          <Text style={styles.optionText}>Gel-Al</Text>
          {selectedType === 'gelal' && <MaterialIcons name="check" size={25} style={styles.selectedIcon} />}
        </TouchableOpacity>
      </View>

      <View style={styles.selectedOptionContainer}>
        {selectedType === 'paket' && <AddressSelection />}
        {selectedType === 'gelal' && <DeliveryTimeSelection />}
      </View>
      <View>
        <Menu/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: 'white',
    height: 120,
    borderWidth: 1,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4.65,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  header: {
    color: '#F9CA24',
    fontSize: 24,
    fontWeight: '600',
    top:20,
  },
  bell: {
    marginLeft: 15,
    top:20,
  },
  optionsContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  option: {
    borderWidth: 2,
    borderColor: '#F9CA24',
    backgroundColor: 'white',
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  selectedOption: {
    backgroundColor: '#F9CA24',
  },
  optionText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',  
  },
  selectedIcon: {
    color: 'white',
  },
  selectedOptionContainer: {
    marginTop: 20,
  },
  selectedOptionText: {
    color: 'white',
  },
});

export default OrderDetail;
