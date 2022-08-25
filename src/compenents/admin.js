import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Button, Card} from 'react-native-elements';
import axios from 'axios';
const Admin = ({navigation}) => {
  const [user, setUser] = useState([]);

  

  //database call here

  const loaduser = async () => {
    await axios({
      method: 'GET',
      url: 'https://immense-garden-86776.herokuapp.com/user',
    })
      .then(function (response) {


        setUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    loaduser();
  }, []);

  const checkAction=()=>{
    return navigation.navigate('Scanner');
  }


  //delete user

  const deleteUser=async(id)=>{
    await axios({
      method: 'DELETE',
      url: `https://immense-garden-86776.herokuapp.com/user/${id}`,
      headers:{"Content-Type":"applications/json"}
    })
      .then(function (response) {
        loaduser()
      })
      .catch(function (error) {
        console.log(error);
      });
  }



  const list = () => {
    return user.map(element => {
      
      return (
        <View
          key={element.id}
          style={{width: 360, height: 100, marginRight: 20, marginLeft: 15}}>
          <View
            style={{
              backgroundColor: '#d2dae2',
              borderRadius: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 80,
              
            }}>
            <View style={{paddingLeft: 10, paddingTop: 5}}>
              <Text style={{fontSize: 20, color: '#353b48'}}>
                {element.firstname} {element.lastname}
              </Text>
              <Text style={{fontSize: 20, color: '#353b48'}}>
                {element.username}
              </Text>
            </View>

            <View style={{paddingTop: 20, paddingRight: 8 ,flexDirection:'row'}}>
            <Button title="delete" onPress={()=>deleteUser(element._id)} buttonStyle={{marginRight:10,backgroundColor:'#f78fb3'}}/>
              <Button title="action" onPress={()=>checkAction()} buttonStyle={{backgroundColor:'#78e08f'}}/>
            </View>
          </View>
        </View>
      );
    });
  };

 
 
  return (
    <View style={{width: 393, height: 750, backgroundColor: '#ff6b81'}}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          fontWeight:'bold',
          color: '#353b48',
          marginTop: 30,
          paddingBottom:20
        }}>
        Beams Users Dashboard
      </Text>

      <ScrollView>{list()}</ScrollView>
    </View>
  );
};

export default Admin;
