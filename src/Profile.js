import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DATA = [
  { id: '1', title: 'Berkay Berkay', icon: 'person', style: { backgroundColor: 'white', marginTop:15, fontSize: 22, iconSize:45, } },
  { id: '2', title: 'deneme123@hotmail.com', icon: 'mail', style: { backgroundColor: 'white', fontSize: 14, iconSize: 20,} },
  { id: '3', title: '+90 555 555 55 55', icon: 'phone', style: { backgroundColor: 'white', fontSize: 14, iconSize: 20, marginBottom:20,} },
  { id: '4', title: 'Canlı Destek', icon: 'support-agent', style: { backgroundColor: 'white', fontSize:18, iconSize:28, } },
  { id: '5', title: 'Adreslerim', icon: 'location-pin', style: { backgroundColor: 'white', fontSize:18, iconSize:28,} },
  { id: '6', title: 'Favori Ürünlerim', icon: 'favorite', style: { backgroundColor: 'white' , fontSize:18, iconSize:28,} },
  { id: '7', title: 'Geçmiş Siparişlerim', icon: 'shopping-bag', style: { backgroundColor: 'white' , fontSize:18, iconSize:28,} },
  { id: '8', title: 'Ödeme Yöntemlerim', icon: 'credit-card', style: { backgroundColor: 'white' , fontSize:18, iconSize:28,} },
  { id: '9', title: 'Fatura Bilgilerim', icon: 'note', style: { backgroundColor: 'white' , fontSize:18, iconSize:28,} },
  { id: '10', title: 'İletişim Tercihleri', icon: 'contact-phone', style: { backgroundColor: 'white', fontSize:18, iconSize:28, } },
  { id: '11', title: 'Hesap Ayarları', icon: 'settings-applications', style: { backgroundColor: 'white' , fontSize:18, iconSize:28,} },
  { id: '12', title: 'Yardım', icon: 'help-center', style: { backgroundColor: 'white', fontSize:18, iconSize:28, } },
  { id: '13', title: 'Çıkış Yap', icon: 'logout', style: { backgroundColor: 'white', marginBottom:50, fontSize:18, iconSize:28,} },
];

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, item.style]}>
    <MaterialIcons name={item.icon} size={item.style.iconSize} color="rgba(249, 202, 36, 1)" />
    <Text style={[styles.title, { fontSize: item.style.fontSize }]}>{item.title}</Text>
    <MaterialIcons name="keyboard-arrow-right" size={24} color="rgba(249, 202, 36, 1)" style={styles.arrowIcon} />
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => (
    <Item item={item} onPress={() => setSelectedId(item.id)} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 22,
    marginVertical: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    marginLeft: 16,
    color: 'black',
  },
  arrowIcon: {
    marginLeft: 'auto',
  },
});

export default App;
