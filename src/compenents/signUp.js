import React, {useState} from 'react';
import { styles } from './styles'
import {Button} from 'react-native-elements';
import axios from 'axios';
import { Keyboard,
    KeyboardAvoidingView,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    Pressable,
    View, } from 'react-native'

const Signup = ({navigation}) => {
    const [username, setUsername] = useState({username: '', error: ''});
    const [password, setPassword] = useState({password: '', error: ''});
    const [firstname, setFirstname] = useState({firstname: '', error: ''});
    const [lastname, setLastname] = useState({lastname: '', error: ''});
     

    console.log(firstname)

    //register user

    const registerUser = () => {
        axios({
          method: 'POST',
          url: 'https://immense-garden-86776.herokuapp.com/auth/register',
          data: {username: username.username, password: password.password,firstname:firstname.firstname,lastname:lastname.lastname},
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(function (response) {
            console.log(response.status)
            if (response.status===200) {
             setUsername({error:"user successffully registered"})
             
            } else {
            }
          })
          .catch(function (error) {
            setUsername({error: 'Fill correct username and password'});
          });
      };


      const saveUser=async()=>{
        await registerUser()
        setUsername({username: ''});
        setPassword({password: ''});
        setFirstname({firstname: ''});
        setLastname({lastname: ''});
        return navigation.navigate('Login');
      }

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>Register Here</Text>
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
             <TextInput
              value={firstname.firstname}
              placeholder="Firstname"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              onChangeText={text => setFirstname({firstname: text})}
            />
             <TextInput
              value={lastname.lastname}
              placeholder="Lastname"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              onChangeText={text => setLastname({lastname: text})}
            />
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => saveUser()}
              title="Register"
            />
             
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default Signup