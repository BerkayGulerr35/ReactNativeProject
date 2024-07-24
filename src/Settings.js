import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SettingsScreen = () => {
  const handleContactPress = () => {
    
    console.log('Bize Ulaşın tıklandı');
  };

  const handleHelpPress = () => {

    console.log('Yardım tıklandı');
  };

  const handleTermsPress = () => {
    
    console.log('Kullanıcı Sözleşmesi tıklandı');
  };

  const handlePrivacyPress = () => {
    
    console.log('Kişisel Veri Aydınlatma Metni tıklandı');
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
      <Text style={styles.header}>Uygulama Ayarları</Text>
      <MaterialIcons style = {styles.bell} name="notifications-none" size={24} color="#F9CA24" />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bize Ulaşın</Text>
        <TouchableOpacity onPress={handleContactPress} style={styles.itemContainer}>
          <Text style={styles.itemText}>İletişim Formu</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Yardım & Politikalar</Text>
        <TouchableOpacity onPress={handleHelpPress} style={styles.itemContainer}>
          <Text style={styles.itemText}>Yardım</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTermsPress} style={styles.itemContainer}>
          <Text style={styles.itemText}>Kullanıcı Sözleşmesi</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePrivacyPress} style={styles.itemContainer}>
          <Text style={styles.itemText}>Kişisel Veri Aydınlatma Metni</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bell:{
    position:'absolute',
    marginLeft:345,
    marginTop:70, 
    
  },
  container: {
    flex:1,
    backgroundColor:'white',
   
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop:25,
    left:10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 20,
    left:25,
    marginTop:10,
  },
  header: {
    color:'#F9CA24',
    fontSize:24,
    fontWeight:'bold',
    marginLeft:15,
    marginTop:65
    
 },
 container1: {
    backgroundColor:'white',
    height:120,
    marginBottom:50,
    borderWidth: 1, // Kenar kalınlığı
  borderColor: 'white',
  shadowColor: "#000",
  shadowOffset: {
     width: 0,
     height: 4,
  },
  shadowOpacity: 0.08,
  shadowRadius: 4.65,
  elevation: 8,
 },
});

export default SettingsScreen;
