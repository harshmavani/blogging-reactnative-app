import React from 'react';
import { StyleSheet, View, BackHandler,ActivityIndicator} from 'react-native';
import { WebView } from 'react-native-webview';

export default class ty_home extends React.Component {
  constructor(props) {
    super(props);
    this.WEBVIEW_REF = React.createRef();
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = ()=>{
    this.WEBVIEW_REF.current.goBack();
    return true;
  }

  onNavigationStateChange(navState) {
    this.setState({
      canGoBack: navState.canGoBack
    });
  }


    render(){
          return (
            <View style={styles.container}>
                <WebView
                 source ={{ uri:'https://www.technoyard.in/category/technology/'}}
                 ref={this.WEBVIEW_REF}
                 onNavigationStateChange={this.onNavigationStateChange.bind(this)}
 
                 startInLoadingState={true}
                 renderLoading={() => (
                   <ActivityIndicator
                     color='black'
                     size='large'
                     style={styles.flexContainer}
                   />
                   )}
                 />
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
  flexContainer: {
    flex: 1,
    top:-200
  },
});
