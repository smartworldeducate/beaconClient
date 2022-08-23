import React, {useState} from 'react';
import {styles} from './styles';
import {
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
      url: 'http://192.168.6.227:5000/auth/login',
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
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
