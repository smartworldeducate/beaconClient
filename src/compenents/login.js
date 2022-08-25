import React, {useState} from 'react';
import {styles} from './styles';
import {
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Pressable,
  View,
} from 'react-native';
import {Button} from 'react-native-elements';
import axios from 'axios';

const Login = ({navigation}) => {
  const [username, setUsername] = useState({username: '', error: ''});
  const [password, setPassword] = useState({password: '', error: ''});


  const loginUser = () => {
    axios({
      method: 'POST',
      url: 'https://immense-garden-86776.herokuapp.com/auth/login',
      data: {username: username.username, password: password.password},
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(function (response) {
        if (response) {
          setUsername({error: 'user success fully login', username: ''});
          setPassword({password: ''});
          return navigation.navigate('Admin');
        } else {
        }
      })
      .catch(function (error) {
        setUsername({error: 'Fill correct username and password'});
      });
  };

  

  const onLoginPress = async () => {
    loginUser();
  };

  const handleRegister=()=>{
    return navigation.navigate('Signup');

  }
  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>BEAMS</Text>
            <Text style={{padding: 10, fontSize: 20, color: 'yellow'}}>
              {username.error}
            </Text>
            <TextInput
              value={username.username}
              placeholder="Username"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              onChangeText={text => setUsername({username: text})}
            />
            <TextInput
              value={password.password}
              placeholder="Password"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              secureTextEntry={true}
              onChangeText={text => setPassword({password: text})}
            />
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => onLoginPress()}
              title="Login"
            />
            <TouchableOpacity
                onPress={()=>handleRegister()}
                style={styles.button}>
                <Text style={styles.text}>Register</Text>
              </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
