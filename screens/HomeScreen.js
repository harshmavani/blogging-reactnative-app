import React from 'react';
import { StyleSheet, Text, View ,Alert, Image,TouchableOpacity} from 'react-native';
import { Button } from 'native-base';

import * as firebase from 'firebase';


export default class HomeScreen extends React.Component {
    state={
        email:""
    }
    componentDidMount(){
        try {
            this.unsAuth = firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({
                    email:user.email
                })
            }else{
                this.props.navigation.navigate("Login")
            }
        })
        } catch (error) {
            Alert.alert(error.message)
        }
        
    }
    UserSignout(){
        firebase.auth().signOut()
        .catch(error=>{
            Alert.alert(error.message)
        })
    }
    componentWillUnmount(){
        this.unsAuth()
    }
    
    render(){
          return (
            <View style={styles.container}>
                <View style={{justifyContent:"center",alignItems: 'center'}}>
                    <Image 
                    source={require('../assets//icon.png')}
                    style={{height:"60%",width:"60%"}}
                    />
                </View>
                <Text style={{textAlign:"center",fontSize:20,margin:30}}>You are login as {this.state.email}</Text>
                <Button full rounded 
                    style={{margin:10,marginLeft:90,marginRight:90,backgroundColor:"#B61A04"}}
                    onPress={()=> this.UserSignout()}
                >
                    <Text style={{fontSize:22 ,color: "white" }}>Logout</Text>
                </Button>   
                <TouchableOpacity onPress={()=>Linking.openURL("https://technoyard.in")} style={{ top:50}}><Text style={{textAlign:"center",fontWeight:"bold",color:"red"}}>Technoyard.in</Text></TouchableOpacity>        
            </View>
        );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
});
