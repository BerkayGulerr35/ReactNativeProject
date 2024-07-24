import React, { useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SampleProductList = ({ navigation }) => {
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);
  const scrollViewRef = useRef();
  const imageUrl = 'https://images.deliveryhero.io/image/fd-tr/LH/zwzw-hero.jpg';

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

  const [productQuantities, setProductQuantities] = useState({});

  const handlePaymentOptionSelect = (option) => {
    setSelectedPaymentOption(option);
  };

  const incrementQuantity = (productId) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  const decrementQuantity = (productId) => {
    setProductQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[productId] || 0;
      return {
        ...prevQuantities,
        [productId]: Math.max(0, currentQuantity - 1),
      };
    });
  };

 const renderProductItem = (product) => (
  <View style={styles.productItem} key={product.id}>
    <View style={styles.productInfo}>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
    </View>
    <Image source={{ uri: product.image }} style={styles.productImage} />
    <View style={styles.quantityContainer}>
      <TouchableOpacity
        style={styles.quantityButton}
        onPress={() => decrementQuantity(product.id)}
      >
        <Text style={styles.quantityButtonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantityText}>{productQuantities[product.id] || 0}</Text>
      <TouchableOpacity
        style={styles.quantityButton}
        onPress={() => incrementQuantity(product.id)}
      >
        <Text style={styles.quantityButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  </View>
);

  const calculateTotal = () => {
    let total = 0;
    products.forEach((product) => {
      const quantity = productQuantities[product.id] || 0;
      total += parseInt(product.price) * quantity;
    });
    return total;
  };

  const handleConfirmOrder = () => {
  
    console.log('Sipariş onaylandı!');
  };

  return (
    <ScrollView style={styles.scrollDetail} ref={scrollViewRef}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Sipariş Detayları</Text>
          <MaterialIcons style={styles.bell} name="notifications-none" size={24} color="#F9CA24" />
          <View style={styles.restaurant}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.resInfo}>Zater Döner (Kınıklı)</Text>
            <Text style={styles.descriptionInfo}>25-35dk Min. 50 TL </Text>
          </View>
        </View>
        {products.map((product) => renderProductItem(product))}
      </View>
      <View>
        <Text style={styles.sum}>Toplam: {calculateTotal()} TL</Text>
        <TouchableOpacity
  style={styles.confirmButton}
  onPress={() => {
    handleConfirmOrder();
    navigation.navigate('Payment'); // Bu satırı ekleyin
  }}
>
  <Text style={styles.confirmButtonText}>Sepeti Onayla</Text>
</TouchableOpacity>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  quantityButtonText:{
    fontSize:22,
  },
  confirmButton: {
    backgroundColor: '#F9CA24',
    borderRadius: 15,
    padding: 15,
    alignSelf: 'center',
    top:150,
  },

  confirmButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  descriptionInfo:{
    left: 115,
    top:6,
    fontWeight:'500'
  },
  image:{
    position:'absolute',
    width:90,
    height:90,
    left:8,
    borderRadius:15,
  },
  resInfo:{
    left:115,
    bottom:23,
    fontWeight:'500',
   },

  restaurant: {
    position:'absolute',
    borderBottomWidth: 0.4,
    minWidth:450,
    height: 130,
    justifyContent: 'center',
    top:135,
    borderColor:'grey',
    shadowColor: "#000",
shadowOffset: {
	width: 6,
	height: 6,
},
shadowOpacity: 0.32,
shadowRadius: 15.14,
    
  },
  scrollDetail: {
    backgroundColor: 'white',
  },
  payButton: {
    backgroundColor: '#F9CA24',
    borderRadius: 15,
    padding: 15,
    marginBottom: 100,
    bottom: 40,
  },
  payButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  arrow: {
    left: 350,
    bottom: 21,
  },
  deposit: {
    left: 250,
    bottom: 4,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'grey',
  },
  pay: {
    fontSize: 18,
    left: 8,
    fontWeight: 'bold',
    top: 15,
  },
  payment: {
    borderTopWidth: 1,
    borderTopColor: '#F9CA24',
    marginBottom: 150,
    top: 25,
  },
  container: {
    flex: 1,
  },
  headerContainer: {
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
    marginBottom: 25,
  },
  header: {
    color: '#F9CA24',
    fontSize: 24,
    fontWeight: '600',
    top: 20,
  },
  bell: {
    marginLeft: 15,
    top: 20,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F9CA24',
    padding: 10,
    top: 130,
  },
  productInfo: {
    flex: 1,
    marginRight: 10,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    right:7
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
    bottom: 12,
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
  sum: {
    fontSize: 20,
    fontWeight: 'bold',
    top: 140,
    shadowColor: '#000',
    height:50,
    borderRadius:15,
    justifyContent:'center',
    textAlign:'center',
    paddingTop:10,
  },
});

export default SampleProductList;
