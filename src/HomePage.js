import { View, Text ,ScrollView, Dimensions, StyleSheet} from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { SvgUri } from 'react-native-svg';
import FirstPage from './FirstPage';


const colors = ['grey', 'thistle', '#F9CA24', 'dimgray'];

const HomePage = () => {
   const handleContentSizeChange = (contentWidth, contentHeight) => {
      // İçerik uzunluğu değiştiğinde burada gerekli ayarlamaları yapabilirsiniz
    };
  return (
   <ScrollView onContentSizeChange={handleContentSizeChange}
   contentContainerStyle={styles.scrollViewContent}>
       <View style={styles.swiper}>
    <SwiperFlatList
      autoplay
      autoplayDelay={4}
      autoplayLoop
      index={2}
      showPagination
      data={colors}
      renderItem={({ item }) => (
        <View style={[styles.child, { backgroundColor: item }]}>
          <Text style={styles.text}>{item}</Text>
        </View>
      )}
    />
  </View>
    <View>
      <View style={styles.container1}>
      <Text style={styles.header}>Berkay Döner </Text>
      <MaterialIcons style = {styles.bell} name="notifications-none" size={24} color="#F9CA24" />
      </View>
      <View style={styles.fullScreen}>

      
      <View style={styles.container}>
       
      </View>
      <View style = {styles.center}>
         <Text style = {styles.sum}> Toplam Param </Text>
         <Text style = {styles.money}> 55,35 TL </Text>
         <Text style = {styles.deposit}> Yükleme yap </Text>
         <MaterialIcons style = {styles.arrow} name="arrow-forward-ios" size={18} color="black" />
      

      </View>
      <Text style = {styles.zero}> 0                0</Text>
      <MaterialIcons style = {styles.star} name="star-outline" size={33} color="#F9CA24" />
      <MaterialIcons style = {styles.coffee} name="local-drink" size={31} color="#F9CA24" />
      <Text style = {styles.info}>  Yıldız bakiyesi         İkram içecek</Text>
      <View style={styles.details}>
      <Text style={styles.detailsText}>Detaylar</Text>
    </View>
     <View style={styles.offer}>
      <Text style={styles.offerBar}></Text>
      <Text style={styles.offerContainer}>
       Kampanyalar
       
        </Text>
        <View style={styles.page}>
        <FirstPage></FirstPage>
        </View>
        
    </View>
    </View>
    </View>
    </ScrollView>
   

    
  );
}
const { width } = Dimensions.get('window');
const styles = StyleSheet.create ({
   page:{
      top:70,
   },
   scrollViewContent:{
      paddingBottom:300,
   },
   swiper:{
      top:140,
      height:230,
      position:'absolute',
      flex:1,
      borderRadius:15,
      border:1,
      borderColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
       width: 5,
       height: 8,
    },
    shadowOpacity: 0.28,
    shadowRadius: 15.65,
    elevation: 8,
   },
   child: { width,
       justifyContent: 'center',
       borderRadius:45,

   },
   text:  { 
      fontSize: width * 0.27, 
      textAlign: 'center' 
   },

   fullScreen:{
      top:230,
   },
   OfferHeader:{
      fontSize:16,
      fontWeight:'700',
      top:130,
   },
   
   campaign:{
      textAlign:'center',
      top:43
   },

   offerBar:{
      width:90,
      height:8,
      borderRadius:6,
      backgroundColor:'rgba(223, 228, 236, 1)',
      top:20,
      left:150,
      overflow:'hidden',
   
   },
   offer:{
      
      backgroundColor:'white',
      width:390,
      height:'auto',
      top:15,
      borderTopStartRadius:50,
      borderTopEndRadius:50,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 0,
      },
      shadowOpacity: 0.32,
      shadowRadius: 15.14,
      elevation: 17,
   },
   offerContainer:{
      flex:1,
      width:360,
      top:50,
      left:10,
      fontSize:17,
      fontWeight:'700',
      left:20

   },
   container: {
      flex:1,
      marginTop:40,
      backgroundColor:"buttonGrey",
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
   center: {
      backgroundColor:'#F9CA24',
      height:142,
      width:354,
      marginLeft:18,
      borderRadius:25,
      top:20,
      shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 8,
},
shadowOpacity: 0.32,
shadowRadius: 15.14,

   },
   deposit: {
      fontSize:15,
      paddingLeft:210,
      fontWeight:'500',
      position:'absolute',
      paddingTop:90,
   },
   money: {
      fontSize:30,
      paddingTop:9,
      paddingLeft:20,
      fontWeight:'700'
      
   },
   sum: {
      fontSize:16,
      marginTop:50,
      paddingLeft:22,
      fontWeight:'500'
   },
   zero: {
      fontSize:30,
      fontWeight:'600',
      marginTop:65,
      marginLeft:182

   },
   info: {
      fontSize:14,
      fontWeight:'600',
      marginLeft:142,
      bottom:57,
   },
   details: {
   backgroundColor: 'rgba(223, 228, 236, 1)',
    width: 90,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:275,
    borderRadius:5,
    bottom:35,
      
   },
   detailsText: {
      color: 'rgba(77, 86, 97, 1)', // Metin rengi
      fontSize: 14, // Metin boyutu
      fontWeight: '600',       
   },
   arrow:{
      marginLeft:310,
      position:'absolute',
      paddingTop:91,
   },
   bell:{
     position:'absolute',
     marginLeft:345,
     marginTop:70, 
     
   },
   star:{
      bottom:34,
      left:153,
   },
   coffee:{
      bottom:65,
      left:275,
   }

})

export default HomePage