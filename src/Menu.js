import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const productsData = [
  {
    id: '1',
    category: 'Dürümler',
    name: 'Klasik Berkay Döner',
    price: '15 TL',
    description: 'Tavuk döner, özel hatay usulü sos, mayonez, turşu ve patates kızartması eşliğinde.',
    image: 'https://www.shutterstock.com/image-photo/turkish-wrap-chicken-doner-tavuk-600nw-2236572607.jpg',
  },
  {
    id: '2',
    category: 'Dürümler',
    name: 'Kaşarlı Berkay Döner',
    price: '18 TL',
    description: 'Tavuk döner, özel hatay usulü sos, mayonez, turşu, patates kızartması ve kaşar eşliğinde.',
    image: 'https://www.shutterstock.com/image-photo/turkish-wrap-chicken-doner-tavuk-600nw-2236572607.jpg',
  },
  {
    id: '3',
    category: 'İçecekler',
    name: 'Coca-Cola (330 Cl.)',
    price: '5 TL',
    description: 'Serinletici bir içecek seçeneği.',
    image: 'https://c8.alamy.com/comp/D2X5YG/can-of-coca-cola-D2X5YG.jpg',
  },
  {
    id: '4',
    category: 'İçecekler',
    name: 'Fanta (330 Cl.)',
    price: '8 TL',
    description: 'Meyve aromalı gazlı içecek.',
    image: 'https://market-product-images-cdn.getirapi.com/product/662adfff-67f4-4311-88c9-bfecab9d8976.jpg',
  },
  {
    id: '5',
    category: 'Dürümler',
    name: 'Kaşarlı Berkay Döner',
    price: '8 TL',
    description: 'Tavuk döner, özel hatay usulü sos, mayonez, turşu, patates kızartması ve kaşar eşliğinde.',
    image: 'https://www.shutterstock.com/image-photo/turkish-wrap-chicken-doner-tavuk-600nw-2236572607.jpg',
  },
  {
    id: '6',
    category: 'Dürümler',
    name: 'Kaşarlı Berkay Döner',
    price: '21 TL',
    description: 'Tavuk döner, özel hatay usulü sos, mayonez, turşu, patates kızartması ve kaşar eşliğinde.',
    image: 'https://www.shutterstock.com/image-photo/turkish-wrap-chicken-doner-tavuk-600nw-2236572607.jpg',
  },
  {
    id: '7',
    category: 'Dürümler',
    name: 'Kaşarlı Berkay Döner',
    price: '35 TL',
    description: 'Tavuk döner, özel hatay usulü sos, mayonez, turşu, patates kızartması ve kaşar eşliğinde.',
    image: 'https://www.shutterstock.com/image-photo/turkish-wrap-chicken-doner-tavuk-600nw-2236572607.jpg',
  },
  {
    id: '8',
    category: 'Dürümler',
    name: 'Kaşarlı Berkay Döner',
    price: '67 TL',
    description: 'Tavuk döner, özel hatay usulü sos, mayonez, turşu, patates kızartması ve kaşar eşliğinde.',
    image: 'https://www.shutterstock.com/image-photo/turkish-wrap-chicken-doner-tavuk-600nw-2236572607.jpg',
  },
  {
    id: '9',
    category: 'İçecekler',
    name: 'Coca-Cola (330 Cl.)',
    price: '52 TL',
    description: 'Serinletici bir içecek seçeneği.',
    image: 'https://c8.alamy.com/comp/D2X5YG/can-of-coca-cola-D2X5YG.jpg',
  },
  {
    id: '10',
    category: 'İçecekler',
    name: 'Coca-Cola (330 Cl.)',
    price: '14 TL',
    description: 'Serinletici bir içecek seçeneği.',
    image: 'https://c8.alamy.com/comp/D2X5YG/can-of-coca-cola-D2X5YG.jpg',
  },
  {
    id: '11',
    category: 'İçecekler',
    name: 'Coca-Cola (330 Cl.)',
    price: '21 TL',
    description: 'Serinletici bir içecek seçeneği.',
    image: 'https://c8.alamy.com/comp/D2X5YG/can-of-coca-cola-D2X5YG.jpg',
  },

];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('Dürümler');

  const renderProductItem = ({ item }) => (
    <TouchableOpacity style={styles.productItem}>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <TouchableOpacity style={styles.addToCartButton}>
        <MaterialIcons name="add-circle" size={28} color='#F9CA24' />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={productsData.filter((product) => product.category === selectedCategory)}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
        ListHeaderComponent={
          <View style={styles.categories}>
            <TouchableOpacity
              style={[styles.category, selectedCategory === 'Dürümler' && styles.selectedCategory]}
              onPress={() => setSelectedCategory('Dürümler')}
            >
              <Text style={styles.categoryText}>Dürümler</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.category, selectedCategory === 'İçecekler' && styles.selectedCategory]}
              onPress={() => setSelectedCategory('İçecekler')}
            >
              <Text style={styles.categoryText}>İçecekler</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 100,
  },
  categories: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    borderBottomColor: '#F9CA24',
    fontWeight: '900',
  },
  categoryText: {
    fontWeight: '700',
  },
  category: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  selectedCategory: {
    backgroundColor: '#eee',
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: '#F9CA24',
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    borderBottomWidth: 1,
    borderRadius: 5,
    paddingBottom: 30,
    borderBottomColor: '#F9CA24',
  },
  productInfo: {
    flex: 1,
    marginRight: 10,
  },
  productImage: {
    width: 130,
    height: 130,
    borderRadius: 18,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 16,
    bottom: 30,
  },
  productDescription: {
    fontSize: 12,
    color: '#666',
    height:45,
    width:230,
    bottom:16,
  },
  productPrice: {
    position:'absolute',
    color: 'black',
    textAlign: 'right',
    margin: 5,
    top: 70,
    right: 135,
    fontWeight: '600',
    fontSize: 16,
  },
  addToCartButton: {
    top: 103,
    position: 'absolute',
    right: 340,
  },
});

export default Menu;
