import React from 'react';
import {Image,TouchableOpacity,Text,SafeAreaView,Linking} from 'react-native';
import * as firebase from 'firebase';
import firebaseConfig from './config';
import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from "./screens/HomeScreen";
import ty_home from "./screens/ty_home";
import ty_technology from "./screens/ty_technology";
import ty_business from "./screens/ty_business";
import ty_sports from "./screens/ty_sports";
import ty_education from "./screens/ty_education";
import ty_lifestyle from "./screens/ty_lifestyle";  
import ty_movie from "./screens/ty_movie";
import ty_socialmedia from "./screens/ty_socialmedia";
import ty_games from "./screens/ty_games";
import ty_nature from "./screens/ty_nature";
import ty_car from "./screens/ty_car";
import {MaterialIcons,Entypo,Octicons,MaterialCommunityIcons } from '@expo/vector-icons';
import CustomSidebarMenu from './screens/CustomSidebarMenu';




import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

  firebase.initializeApp(firebaseConfig);
  const Drawer = createDrawerNavigator();
  function openprojectsmash(){
    return Linking.openURL("https://projectsmash.online")
  }
  function openmoviesarea(){
    return Linking.openURL("https://moviesarea.online")
  }
  function openwebschooltoday(){
    return Linking.openURL("https://webschooltoday.com")
  }

  function MyDrawer() {
    return (
      
      <Drawer.Navigator initialRouteName="Feed"
      drawerStyle={{
        backgroundColor: 'white',
        width:"70%"
      }}
      drawerContentOptions={{activeTintColor:"red",inactiveTintColor:"black"}}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
      >
        <Drawer.Screen
          name="Technoyard"
          component={MyStack}
          options={{ 
            drawerLabel: 'Blogs',
            style:{color:"white"},
            drawerIcon: config => <MaterialIcons name={'article'} size={22} color={'red'} style={{marginRight:-20}} />
          }}
        />

        <Drawer.Screen
          name="Moviesarea"
          component={openmoviesarea}
          options={{ 
            drawerLabel: 'Moviesarea.online',
            drawerIcon: config => <MaterialCommunityIcons name={'movie-open'} size={20} color={'red'} style={{marginRight:-20}}/>
          }}
        />
        
        <Drawer.Screen
          name="Projectsmash"
          component={openprojectsmash}
          options={{ 
            drawerLabel: 'Projectsmash.online',
            drawerIcon: config => <Octicons name={'project'} size={18} color={'red'} style={{marginRight:-20}} />
           }}
        />
        <Drawer.Screen
          name="Webschooltoday"
          component={openwebschooltoday}
          options={{ 
            drawerLabel: 'Webschooltoday.com',
            drawerIcon: config => <Entypo  name={'code'} size={22} color={'red'} style={{marginRight:-20}} />
          }}
        />
      </Drawer.Navigator>
    );
  }

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator 
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#E83920' },
      }}
    >   
          <Stack.Screen name="Loading" component={LoadingScreen} options={{headerShown:null}}/>  

      <Stack.Screen 
      options={({ navigation }) => ({
    headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('ty_logout')}>
      <Image
        style={{ width: 30, height: 30 ,marginRight:20}}
        source={require('./assets/user.png')}
        resizeMode='contain'
      />
      </TouchableOpacity>    ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              style={{ width: 20, height: 20 ,marginLeft:20}}
              source={require('./assets/menu.png')}
              resizeMode='contain'
            />
            </TouchableOpacity>
          )
  })}
   name="Technoyard Blogs"  component={MyTabs} />
      <Stack.Screen options={({ navigation }) => ({
          headerLeft: () => (null),headerTitle: "Create New Account",headerTitleStyle:{marginLeft:20}
  })} name="Signup" component={SignupScreen}/>
      <Stack.Screen name="Logout" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />

    </Stack.Navigator>
  );
}

const Tab = createMaterialTopTabNavigator();  

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        labelStyle: { fontSize: 15 },
        style: { backgroundColor: '#D64935',width:"109%" },
      }}
    >
      <Tab.Screen name="ty_home" options={{ 
     tabBarLabel: (props) => ( // App Logo
      <Image
        style={{ width: 20, height: 20 }}
        source={require('./assets/home.png')}
        resizeMode='contain'
      />
    ),
    headerTitleStyle: { flex: 1, textAlign: 'center' },
    }} component={ty_home} />
      <Tab.Screen name="ty_technology" options={{ 
     tabBarLabel: (props) => ( // App Logo
      <Image
        style={{ width: 20, height: 20 }}
        source={require('./assets/technology.png')}
        resizeMode='contain'
      />
    ),
    headerTitleStyle: { flex: 1, textAlign: 'center' },
    }} component={ty_technology} />
          <Tab.Screen name="ty_business" options={{ 
     tabBarLabel: (props) => ( // App Logo
      <Image
        style={{ width: 20, height: 20 }}
        source={require('./assets/business.png')}
        resizeMode='contain'
      />
    ),
    headerTitleStyle: { flex: 1, textAlign: 'center' },
    }} component={ty_business} />
      <Tab.Screen name="ty_sports" options={{ 
     tabBarLabel: (props) => ( // App Logo
      <Image
        style={{ width: 20, height: 20 }}
        source={require('./assets/sports.png')}
        resizeMode='contain'
      />
    ),
    headerTitleStyle: { flex: 1, textAlign: 'center' },
    }} component={ty_sports} />
      <Tab.Screen name="ty_education" options={{ 
     tabBarLabel: (props) => ( // App Logo
      <Image
        style={{ width: 20, height: 20 }}
        source={require('./assets/education.png')}
        resizeMode='contain'
      />
    ),
    headerTitleStyle: { flex: 1, textAlign: 'center' },
    }} component={ty_education} />
      <Tab.Screen name="ty_lifestyle" options={{ 
     tabBarLabel: (props) => ( // App Logo
      <Image
        style={{ width: 20, height: 20 }}
        source={require('./assets/lifestyle.png')}
        resizeMode='contain'
      />
    ),
    headerTitleStyle: { flex: 1, textAlign: 'center' },
    }} component={ty_lifestyle} />
      <Tab.Screen name="ty_movie" options={{ 
     tabBarLabel: (props) => ( // App Logo
      <Image
        style={{ width: 20, height: 20 }}
        source={require('./assets/movie.png')}
        resizeMode='contain'
      />
    ),
    headerTitleStyle: { flex: 1, textAlign: 'center' },
    }} component={ty_movie} />
      <Tab.Screen name="ty_socialmedia" options={{ 
     tabBarLabel: (props) => ( // App Logo
      <Image
        style={{ width: 20, height: 20 }}
        source={require('./assets/social.png')}
        resizeMode='contain'
      />
    ),
    headerTitleStyle: { flex: 1, textAlign: 'center' },
    }} component={ty_socialmedia} />
      <Tab.Screen name="ty_games" options={{ 
     tabBarLabel: (props) => ( // App Logo
      <Image
        style={{ width: 20, height: 20 }}
        source={require('./assets/games.png')}
        resizeMode='contain'
      />
    ),
    headerTitleStyle: { flex: 1, textAlign: 'center' },
    }} component={ty_games} />
      <Tab.Screen name="ty_car" options={{ 
     tabBarLabel: (props) => ( // App Logo
      <Image
        style={{ width: 20, height: 20 }}
        source={require('./assets/car.png')}
        resizeMode='contain'
      />
    ),
    headerTitleStyle: { flex: 1, textAlign: 'center' },
    }} component={ty_car} />
      <Tab.Screen name="ty_nature" options={{ 
     tabBarLabel: (props) => ( // App Logo
      <Image
        style={{ width: 20, height: 20 }}
        source={require('./assets/nature.png')}
        resizeMode='contain'
      />
    ),
    headerTitleStyle: { flex: 1, textAlign: 'center' },
    }} component={ty_nature} />

    <Tab.Screen name="ty_logout" options={{ 
     tabBarLabel: '',
    headerTitleStyle: { flex: 1, textAlign: 'center', visible: false},
    }}
    component={HomeScreen} />

    </Tab.Navigator>
  );
}

export default function navigationcontainer() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
