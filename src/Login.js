import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import HomePage from './HomePage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const width = Dimensions.get('window').width;

export default function Login({navigation}) {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const [password, setPassword] = useState('');
  const handleForgotPassword = () => {
    
    console.log('Forgot Password pressed');
  };
  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Merhaba,</Text>
      <Text style={styles.p}>Sizi burada görmekten memnuniyet duyuyoruz. Lütfen kayıtlı kullanıcı bilgileriniz ile giriş yapınız.</Text>
     <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgot}>Şifrenizi mi unuttunuz?</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Email"
        style={styles.textInput}
        autoCapitalize="none"
      />
     
        <View>
        <TextInput
         placeholder="Password"
         style={styles.textInput}
         autoCapitalize="none"
         secureTextEntry={!isPasswordVisible}
         value={password}
         onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.eyeContainer} onPress={togglePasswordVisibility}>
        <MaterialIcons
          style={styles.eye}
          name={isPasswordVisible ? 'visibility-off' : 'visibility'}
          size={24}
          color="black"
        />
      </TouchableOpacity></View>
    
    
      <TouchableOpacity style={styles.loginButton} onPress={()=> navigation.navigate('Tabs')}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    marginTop: 12,
    elevation: 1.3,
    borderWidth: 1,
    borderRadius: 5,
    width: 346,
    height: 45,
    fontSize: 15,
    textAlign: 'left',
    padding: 10,
    borderColor: '#B4BBCB',
    bottom: 90,
  },
  header: {
    color: '#2E2D38',
    fontSize: 30,
    fontWeight: 'bold',
    width: 300,
    height: 36,
    bottom: 90,
    right: 23,
    lineHeight: 37,
    letterSpacing: 0.32,
  },
  p: {
    width: 316,
    height: 45,
    right: 14,
    fontSize: 14,
    lineHeight: 22.5,
    bottom: 75,
    textAlign: 'left',
    color: '#4D5661',
    marginBottom:30,
  },
  logoText: {
    color: '#C79B00',
    bottom: 250,
    fontSize: 28,
    fontWeight: '900',
    width: 229,
    height: 30,
    right: 60,
  },
  tmSymbol: {
    fontWeight: '200',
  },
  forgot: {
    color: '#4D5661',
    top: 110,
    textAlign: 'right',
    left: 95,
  },
  loginButton: {
    backgroundColor: '#F9CA24',
    borderRadius: 4,
    width:348,
    textAlign:'center',
    alignItems:'center',
    height:55,
    top:60,
    justifyContent:'center'
    
  },
  buttonText: {
    color: '#2E2D38',
    fontSize: 16,
    fontWeight:'600',
    gap:8,
  },
  eye:{
    bottom:124,
    left:308
  }
});

