import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, ActivityIndicator, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';
import {styles} from './styles';
import axios from 'axios';
import Swiper from 'react-native-swiper';
const Admin = ({navigation}) => {
  const [user, setUser] = useState([]);
  const [show, setShow] = useState(false);

  //database call here

  const loaduser = async () => {
    setShow(true);
    await axios({
      method: 'GET',
      url: 'https://immense-garden-86776.herokuapp.com/user',
    })
      .then(function (response) {
        setShow(false);

        setUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    loaduser();
  }, []);

  const checkAction = () => {
    return navigation.navigate('Scanner');
  };

  //delete user

  const deleteUser = async id => {
    await axios({
      method: 'DELETE',
      url: `https://immense-garden-86776.herokuapp.com/user/${id}`,
      headers: {'Content-Type': 'applications/json'},
    })
      .then(function (response) {
        loaduser();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const list = () => {
    return user.map((element, index) => {
      return (
        <View key={index} style={{flex: 1}}>
          <View
            style={{
              backgroundColor: '#d2dae2',
              borderRadius: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 80,
              margin: 10,
            }}>
            <View style={{paddingLeft: 10, paddingTop: 5}}>
              <Text style={{fontSize: 20, color: '#353b48'}}>
                {element.firstname} {element.lastname}
              </Text>
              <Text style={{fontSize: 20, color: '#353b48'}}>
                {element.username}
              </Text>
            </View>

            <View
              style={{paddingTop: 20, paddingRight: 8, flexDirection: 'row'}}>
              <Button
                title="delete"
                onPress={() => deleteUser(element._id)}
                buttonStyle={{marginRight: 10, backgroundColor: '#f78fb3'}}
              />
              <Button
                title="action"
                onPress={() => checkAction()}
                buttonStyle={{backgroundColor: '#78e08f'}}
              />
            </View>
          </View>
        </View>
      );
    });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#ff6b81'}}>
      <View style={styles.sliderContainer}>
        <Swiper autoplay height={200} activeDotColor="#FF6347">
          <View style={styles.slide}>
            <Image
              source={{
                uri: 'https://www.beaconhouse.net/wp-content/uploads/2017/04/welcome-image.png',
              }}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={{
                uri: 'https://scontent.flhe9-1.fna.fbcdn.net/v/t31.18172-8/22041955_1395690747151038_957403483505391003_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=973b4a&_nc_ohc=Ev1Of_PmmQ4AX9etqa5&_nc_ht=scontent.flhe9-1.fna&oh=00_AT8LWGUvi4cdWPsS0J4F1hJ6vMlGRU0eF3IF9Fcny8laqQ&oe=63356FDF',
              }}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={{
                uri: 'https://i.dawn.com/primary/2017/08/59981f4c5e511.jpg',
              }}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator animating={show} size="large" color="gray" />
      </View>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 18,
          fontWeight: 'bold',
          color: 'white',
        }}>
        Recently Viewed
      </Text>
      <ScrollView>{list()}</ScrollView>
    </View>
  );
};

export default Admin;
