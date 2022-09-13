import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {View, Image, ImageBackground, SafeAreaView} from 'react-native';

const Splash = ({navigation}) => {
  const [timepass, setTimepss] = useState(false);

  useEffect(()=>{
    setTimeout(() => {
      setTimepss(true);
    }, 3000);
  },[timepass])

  if (!timepass) {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.containerView}>
          <ImageBackground
            source={{
              uri: 'https://images.unsplash.com/photo-1557682257-2f9c37a3a5f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=282&q=80',
            }}
            style={{width: 400, height: 750}}>
            <Image
              source={{
                uri: 'https://play-lh.googleusercontent.com/KtRMLFoIrACVrjWOA5o_vG6u57ysZegMgRehLlJslUgNUgzXhcKYv-LmXxPq58W1e9k=w240-h480-rw',
              }}
              style={{
                width: 100,
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 200,
                marginLeft: 140,
              }}></Image>
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
  navigation.navigate('Login');
  return null;
};

export default Splash;
