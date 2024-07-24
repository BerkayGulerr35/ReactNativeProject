import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SampleProductList = () => {
  const products = [
    {
      id: '1',
      name: 'Klasik Berkay Döner',
      price: '15 TL',
      description: 'Tavuk döner, özel hatay usulü sos, mayonez, turşu ve patates kızartması eşliğinde.',
      image: 'https://www.shutterstock.com/image-photo/turkish-wrap-chicken-doner-tavuk-600nw-2236572607.jpg',
    },
    {
      id: '2',
      name: 'Kaşarlı Berkay Döner',
      price: '18 TL',
      description: 'Tavuk döner, özel hatay usulü sos, mayonez, turşu, patates kızartması ve kaşar eşliğinde.',
      image: 'https://www.shutterstock.com/image-photo/turkish-wrap-chicken-doner-tavuk-600nw-2236572607.jpg',
    },
    {
      id: '3',
      name: 'Coca-Cola (330 Cl.)',
      price: '5 TL',
      description: 'Serinletici bir içecek seçeneği.',
      image: 'https://c8.alamy.com/comp/D2X5YG/can-of-coca-cola-D2X5YG.jpg',
    },
  ];

  const renderProductItem = (product) => (
    <View style={styles.productItem} key={product.id}>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <Text style={styles.productPrice}>{product.price}</Text>
      </View>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <TouchableOpacity style={styles.addToCartButton}>
        <MaterialIcons name="add-circle" size={28} color='#F9CA24' />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {products.map((product) => renderProductItem(product))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  productInfo: {
    flex: 1,
    marginRight: 10,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  productPrice: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  addToCartButton: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default SampleProductList;
