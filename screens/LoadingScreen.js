import React from 'react';
import { StyleSheet, View ,ActivityIndicator} from 'react-native';

import * as firebase from 'firebase';

export default class Loading extends React.Component {

    componentDidMount(){
       this.unsAuth = firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.props.navigation.navigate("Technoyard Blogs")
            }else{
                this.props.navigation.navigate("Signup")
            }
        })
    }
    componentWillUnmount(){
        this.unsAuth()
    }

    render(){
          return (
            <View style={styles.container}>
                <ActivityIndicator 
                   size="large"
                   color="#d9534f"
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
