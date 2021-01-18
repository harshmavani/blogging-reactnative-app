import React from 'react';
import {MaterialIcons,MaterialCommunityIcons   } from '@expo/vector-icons';
import {SafeAreaView,View,StyleSheet,Image,Text,Linking,TouchableOpacity} from 'react-native';
import {DrawerContentScrollView,DrawerItemList,

} from '@react-navigation/drawer';

const CustomSidebarMenu = (props) => {
  function About() {
    return Linking.openURL("https://www.technoyard.in/about-us/")
  }
  function Privacy() {
    return Linking.openURL("https://www.technoyard.in/privacy-policy/")
  }  
  function Terms() {
    return Linking.openURL("https://www.technoyard.in/terms-conditions/")
  }  
  function Contact() {
    return Linking.openURL("https://www.technoyard.in/contact-us/")
  }
  function opentechnoyard() {
    return Linking.openURL("https://www.technoyard.in")
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
            source={require('../assets/icon.png')}
            style={styles.sideMenuProfileIcon}
      />
      <DrawerContentScrollView {...props}>
      <Text style={{ fontSize: 18 ,margin:20, textAlign:'center', color: 'black' }}>Our Websites</Text>
        <DrawerItemList {...props} />
        <Text style={{ fontSize: 18 ,margin:20, textAlign:'center', color: 'black' }}>About App</Text>

        <TouchableOpacity onPress={()=> About()}><View style={styles.text}><MaterialCommunityIcons name={'web'} size={20} color={'red'} /><Text>About Us</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={()=> Privacy()}><View style={styles.text}><MaterialIcons name={'privacy-tip'} size={20} color={'red'} /><Text>Privacy Policy</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={()=> Terms()}><View style={styles.text}><MaterialIcons name={'import-contacts'} size={20} color={'red'} /><Text>Terms & Conditions</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={()=> Contact()}><View style={styles.text}><MaterialIcons name={'quick-contacts-mail'} size={20} color={'red'} /><Text>Contact Us</Text></View></TouchableOpacity>

      </DrawerContentScrollView>
      <TouchableOpacity onPress={()=> opentechnoyard()}><Text style={{ fontSize: 16,marginBottom:20, textAlign: 'center', color: 'red' }}>Technoyard.in</Text></TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop:50,
    marginBottom:-30,
  },
  text:{
    fontSize: 16,
    color: 'grey',
    marginLeft:20,
    margin:15,
    alignSelf: 'center',
    alignItems:'center'

  }
});

export default CustomSidebarMenu;
