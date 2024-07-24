import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const campaigns = [
  {
    id: '1',
    imageUri: 'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/copyright.svg',
    text: 'Kampanya 1: Buraya kampanya ile ilgili kısa yazı gelecek. Burası ne kadar uzatılrısa border ona göre genişleyecek. Bu bir kampanya içeriği hakkında deneme yazısıdır. Nasıl görüneceğini test etmek amacıyla yazılmıştır. Dikkate almayınız.',
  },
  {
    id: '2',
    imageUri: 'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/copyright.svg',
    text: 'Kampanya 2: Buraya kampanya ile ilgili kısa yazı gelecek. Burası ne kadar uzatılrısa border ona göre genişleyecek. Bu bir kampanya içeriği hakkında deneme yazısıdır. Nasıl görüneceğini test etmek amacıyla yazılmıştır. Dikkate almayınız.',
  },
  {
    id: '3',
    imageUri: 'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/copyright.svg',
    text: 'Kampanya 3: Buraya kampanya ile ilgili kısa yazı gelecek. Burası ne kadar uzatılrısa border ona göre genişleyecek. Bu bir kampanya içeriği hakkında deneme yazısıdır. Nasıl görüneceğini test etmek amacıyla yazılmıştır. Dikkate almayınız.',
  },
  {
    id: '4',
    imageUri: 'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/copyright.svg',
    text: 'Kampanya 4: Buraya kampanya ile ilgili kısa yazı gelecek. Burası ne kadar uzatılrısa border ona göre genişleyecek. Bu bir kampanya içeriği hakkında deneme yazısıdır. Nasıl görüneceğini test etmek amacıyla yazılmıştır. Dikkate almayınız.',
  },
  {
    id: '5',
    imageUri: 'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/copyright.svg',
    text: 'Kampanya 5: Buraya kampanya ile ilgili kısa yazı gelecek. Burası ne kadar uzatılrısa border ona göre genişleyecek. Bu bir kampanya içeriği hakkında deneme yazısıdır. Nasıl görüneceğini test etmek amacıyla yazılmıştır. Dikkate almayınız.',
  },
];

const CampaignsPage = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleSettingsPress = () => {
    navigation.navigate('SettingsScreen');

  };
  return (
    <ScrollView style={styles.container}>
      <View >
        <Text style={styles.welcome}>
          Berkay Döner
        </Text>
        <TouchableOpacity onPress={handleSettingsPress}>
 
        <MaterialIcons style = {styles.settings} name="settings" size={35} color="#F9CA24" />
      <Text style = {styles.setText}> Ayarlar</Text>
     
        </TouchableOpacity>
      </View>
      {campaigns.map((campaign) => (
        <View key={campaign.id} style={styles.campaignContainer}>
          <View style={styles.imageContainer}>
            <SvgUri width="100%" height="200" uri={campaign.imageUri} />
          </View>
          <Text style={styles.campaignText}>{campaign.text}</Text>
        </View>
      ))}
      <TouchableOpacity onPress={handleLoginPress} style={styles.loginIconContainer}>
        <View style={styles.logIcon} >
      <MaterialIcons style = {styles.login} name="login" size={45} color="#F9CA24" />
     
        <Text style = {styles.logText}>Giriş yap</Text>
        </View>
      </TouchableOpacity>
     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  setText:{
    left:220,
    bottom:45,
    fontWeight:'600'
  },
  settings:{
    position:'absolute',
    right:95,
    bottom:74,
  },
  welcome:{
    fontSize:23,
    margin:20,
    fontWeight:'600',
    right:10,
    bottom:15,
    color:"#F9CA24" ,
    fontWeight:'bold',
    paddingVertical:15
  },
  logIcon:{
    position:'absolute',
    right:5,
    
  },
  container: {
    flex: 1,
    padding: 15,
    marginBottom: 105,
    top: 35,
  },
  campaignContainer: {
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 35,
    overflow: 'hidden',
  },
  imageContainer: {
    overflow: 'hidden',
    borderRadius: 6,
    margin: 15,
  },
  campaignText: {
    margin: 15,
    fontSize: 16,
  },
  loginIconContainer: {
    position: 'absolute',
    right: 6,
  },
  logText:{
    left:2, 
    fontWeight:'600',
    top:8,
  },
});

export default CampaignsPage;
