import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  FlatList,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';

const Payment = () => {
  const phoneNumber = '0553 *** **89';
  const [orderNote, setOrderNote] = useState('');
  const [serviceNotNeeded, setServiceNotNeeded] = useState(false);
  const [ringNotNeeded, setRingNotNeeded] = useState(false);
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [showCardModal, setShowCardModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardNumberInput, setCardNumberInput] = useState('');

  const handlePhonePress = () => {
    console.log('Telefon numarasına tıklandı');
  };

  const handleBaşkaKartlaÖdePress = () => {
    setShowCardDetails(false);
  };

  const handleKartBarPress = () => {
    setShowCardModal(true);
  };

  const handleCardSelect = (item) => {
    setSelectedCard(item);
    setShowCardModal(false);
  };

  const handleÖdemeYapPress = () => {
    // Seçilen kart ile ödeme işlemini gerçekleştir
    console.log('Ödeme yapıldı:', selectedCard);
  };

  const renderCardItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCardSelect(item)}>
      <Text style={styles.cardItemText}>{item.cardNumber}</Text>
    </TouchableOpacity>
  );

  const cardData = [
    { id: '1', cardNumber: '**** **** **** 8234' },
    { id: '2', cardNumber: '**** **** **** 5421' },
    { id: '3', cardNumber: '**** **** **** 5178' },
    { id: '4', cardNumber: '**** **** **** 1763' },
    // ... Daha fazla kart eklenebilir
  ];

  return (
    <ScrollView style={styles.ScrollView}>
         <View style={styles.container}>
        <Text style={styles.header}>Güvenli Ödeme </Text>
        <MaterialIcons style={styles.bell} name="notifications-none" size={24} color="#F9CA24" />
      </View>
      <View style={styles.deliveryAddress}>
        <Text style={styles.text}>Teslimat Adresi</Text>
        <View style={styles.addressDetail}>
          <MaterialIcons style={styles.pin} name="location-pin" size={24} color="#F9CA24" />
          <Text style={styles.city}> Kınıklı Mah / Pamukkale / Denizli</Text>
          <Text style={styles.location}>
            Kınıklı Mahallesi 6088 Sokak no:18 kat:5 daire:8 Sevgi Apartmanı
          </Text>
          <TouchableOpacity onPress={handlePhonePress}>
            <Text style={styles.phoneLink}>{phoneNumber}</Text>
          </TouchableOpacity>
        </View>
        {/* Telefon numarasının altına bir fotoğraf ekleyelim */}
        <Image
          source={{ uri: 'https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/609147088669907f652110b0_report-an-issue(about-maps).jpeg' }}
          style={styles.phoneNumberImage}
        />
         <MaterialIcons style={styles.pin} name="info" size={24} color="#F9CA24" />
         
        <Text style={styles.locationText}>      Teslimatınız haritada belirtilen noktaya yapılacaktır.</Text>
      </View>
      
      <View style={styles.orderNoteContainer}>
        <Text style={styles.orderNoteTitle}>Sipariş Notu</Text>
        <TextInput
          style={styles.orderNoteInput}
          placeholder="Buraya sipariş notunuzu ekleyebilirsiniz."
          value={orderNote}
          onChangeText={(text) => setOrderNote(text)}
          multiline
        />
      </View>

      {/* Servis İstemiyorum ve Zile Basma Seçenekleri */}
      <View style={styles.optionsContainer}>
        <View style={styles.optionItem}>
          <Text>Servis İstemiyorum</Text>
          <Text style={styles.subtext}>(Plastik, tabak, çatal, bıçak ve kağıt peçete istemiyorum.)</Text>
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={() => setServiceNotNeeded(!serviceNotNeeded)}
          >
            <Text>{serviceNotNeeded ? 'Kapat' : 'Aç'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.optionItem}>
          <Text>Zile Basma</Text>
          <Text style={styles.subtext2}>(Kuryemiz adresinize ulaştığında 850'li bir numaradan sizi arayacaktır.)</Text>
          <TouchableOpacity
            style={styles.toggleButton2}
            onPress={() => setRingNotNeeded(!ringNotNeeded)}
          >
            <Text>{ringNotNeeded ? 'Kapat' : 'Aç'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {showCardDetails ? (
        // Seçilen Kart Bilgileri
        <View style={styles.selectedCardContainer}>
          <Text style={styles.selectedCardText}>Seçili Kart:</Text>
          <Text>{selectedCard?.cardNumber}</Text>
          <TouchableOpacity onPress={handleKartBarPress}>
            <Text style={styles.changeCardText}>Kart Seçiniz</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // Kart Bilgileri Giriş Bölümü
        <View style={styles.cardInputContainer}>
          <Text style={styles.cardInputLabel}>Kart Numarası:</Text>
          <TextInput
            style={styles.cardInput}
            placeholder="Kart numaranızı giriniz"
            value={cardNumberInput}
            onChangeText={(text) => setCardNumberInput(text)}
          />
          <Text style={styles.cardInputLabel}>Son Kullanma Tarihi:</Text>
          <TextInput
            style={styles.cardInput}
            placeholder="Kartınızın son kullanma tarihini giriniz"
          />
          <Text style={styles.cardInputLabel}>Cvv:</Text>
          <TextInput
            style={styles.cardInput}
            placeholder="3 haneli Cvv güvenlik kodunu giriniz"
          />
          <TouchableOpacity onPress={handleBaşkaKartlaÖdePress}>
            <Text style={styles.baskaKartlaOdeButtonText}>Farklı Kartla Öde</Text>
          </TouchableOpacity>
        </View>
      )}
      <View>
        <Text style={styles.savedCard}> Kayıtlı kartımdan öde </Text>
      </View>

      {/* Kart Bar */}
      <TouchableOpacity style={styles.kartBar} onPress={handleKartBarPress}>
        <Text style={styles.kartBarText}>{selectedCard?.cardNumber || 'Kartınızı seçiniz'}</Text>
        <MaterialIcons style={styles.arrow} name="keyboard-arrow-down" size={28} color="black" />
         
      </TouchableOpacity>

      {/* Ödeme Yap Butonu */}
      <TouchableOpacity style={styles.odemeYapButton} onPress={handleÖdemeYapPress}>
        <Text style={styles.odemeYapButtonText}>Ödeme Yap : 58 TL</Text>
      </TouchableOpacity>

      {/* Kart Modal (Pop-up) */}
      <Modal
  animationType="slide"
  transparent={true}
  visible={showCardModal}
  onRequestClose={() => setShowCardModal(false)}
>
  <View style={styles.modalContainer}>
    <View style={styles.cardModalContent}>
      <Text style={styles.modalTitle}>Kayıtlı Kartlarınız</Text>
      <FlatList
        data={cardData}
        keyExtractor={(item) => item.id}
        renderItem={renderCardItem}
      />
      {/* İptal Butonu */}
      <TouchableOpacity onPress={() => setShowCardModal(false)}>
        <Text style={styles.modalCloseButton}>İptal</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 120,
        
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
    arrow:{
        position:'absolute',
        right:15,
        bottom:6,
    },
    savedCard: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#F9CA24',
        marginHorizontal:6,
        marginVertical:5,
      },
    cardInputContainer: {
        padding: 10,
        marginBottom: 20,
        
      },
      cardInputLabel: {
        fontSize: 16,
        marginBottom: 5,
      },
      cardInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
      },
      baskaKartlaOdeButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#F9CA24',
      },
      kartBar: {
        backgroundColor: '#F9CA24',
        padding: 10,
        borderRadius: 5,
        margin: 10,
        alignItems: 'center',
      },
      kartBarText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
      },
      odemeYapButton: {
        backgroundColor: '#F9CA24',
        padding: 10,
        borderRadius: 15,
        margin: 10,
        alignItems: 'center',
        marginBottom:50,
      },
      odemeYapButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      cardModalContent: {
        backgroundColor: '#F9CA24',
        padding: 20,
        borderRadius: 20,
        width: '80%',
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      modalCloseButton: {
        color:'black',
        padding: 10,
        borderRadius: 15,
        margin: 10,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        borderWidth:1,
        borderColor:'white'
      },
      selectedCardContainer: {
        padding: 10,
        marginBottom: 20,
      },
      selectedCardText: {
        fontSize: 16,
        marginBottom: 5,
      },
      changeCardText: {
        color: '#F9CA24',
        fontSize: 16,
        fontWeight: 'bold',
      },
      cardItemText: {
        fontSize: 16,
        marginBottom: 10,
      },
    toggleButton2: {
        backgroundColor: '#F9CA24',
        padding: 8,
        borderRadius: 5,
        right:68,
      },
    subtext2:{
        top:20,
        right:70,
        fontWeight:'400',
        fontSize:9,
    },
    subtext:{
        top:20,
        right:120,
        fontWeight:'400',
        fontSize:9,
    },
    orderNoteContainer: {
        marginTop: 20,
        paddingHorizontal: 10,
        paddingVertical:90,
      },
      orderNoteTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      orderNoteInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        height: 100,
      },
      optionsContainer: {
        bottom:50,
      },
      optionItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal:5
      },
      toggleButton: {
        backgroundColor: '#F9CA24',
        padding: 8,
        borderRadius: 5,
        right:61,
      },
    locationText: {
        height:42,
        bottom:23,
        left:22,
        fontSize: 12,
        fontWeight: '500',
    },
  city: {
    bottom: 27,
    left: 35,
    fontSize: 16,
    fontWeight: '500',
  },
  phone: {
    margin: 5,
    left: 30,
    fontSize: 13,
    fontWeight: '500',
    color: 'grey',
  },
  phoneLink: {
    margin: 5,
    left: 34,
    fontSize: 13,
    fontWeight: '500',
    color: 'grey',
    textDecorationLine: 'underline'
    
  },
  addressDetail: {
    borderTopWidth: 0.2,
    borderTopColor: 'grey',
    
  },
  pin: {
    top: 5,
    margin: 10,
  },
  location: {
    maxWidth: 160,
    maxHeight: 100,
    left: 39,
    bottom: 15,
  },
  text: {
    margin: 15,
  },
  ScrollView: {
    marginLeft: 5,
    flex:1,
    
  },
  deliveryAddress: {
    
    
    borderColor: 'grey',
    width: 380,
    height: 455,
    top: 65,
    borderRadius: 15,
    
  },
  phoneNumberImage: {
    width: 360,
    height: 200,
    alignSelf: 'center',
    marginTop: 12,
  
  },
});

export default Payment;
