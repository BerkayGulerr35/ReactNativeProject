// Tabs.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Profile from "../src/Profile";
import OrderSelect from "../src/OrderSelect";
import HomePage from "../src/HomePage";
import OrderDetail from "../src/OrderDetail";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'black', // Aktif tab ikon ve yazı rengi
        tabBarInactiveTintColor: 'white', // Pasif tab ikon ve yazı rengi
        tabBarShowLabel: true, // Tab üzerinde yazıları göster
        tabBarStyle: {
          backgroundColor: 'rgba(249, 202, 36, 1)', // Tab bar arkaplan rengi
       
          borderRadius: 30, // Tab bar köşe yuvarlama
          height: 80, // Tab bar yüksekliği
          position: 'absolute', // Tab bar'ı ekranın altına sabitle
          top:770,
        },
        tabBarLabelStyle: {
          fontSize: 12, // Yazı boyutu
        },
        tabBarItemStyle: {
          justifyContent: 'center', // İkon ve yazıyı dikey ortala
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'HomePage') {
            iconName = 'home';
          } else if (route.name === 'Kampanyalar') {
            iconName = 'local-offer';
          } else if (route.name === 'Profil') {
            iconName = 'person';
          } else if (route.name === 'Sipariş') {
            iconName = 'shopping-cart';
          } else if (route.name === 'Sepetim') {
            iconName = 'shopping-basket';
          }
            

          return <MaterialIcons name={iconName} color={color} size={size} />;
        },
      })}
    >
      <Tab.Screen name="HomePage" component={HomePage} options={{headerShown:false}} />
     
      <Tab.Screen name="Sepetim" component={OrderDetail} options={{headerShown:false}}/>
      <Tab.Screen name="Profil" component={Profile}/>
      <Tab.Screen name="Sipariş" component={OrderSelect} options={{headerShown:false}}/>
     
    </Tab.Navigator>
  );
}

export default Tabs;
