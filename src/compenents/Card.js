import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Card = ({navigation}) => {
  const theme = useTheme();
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
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

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate('Login')}>
          <View style={styles.categoryIcon}>
            <Icon name="user-o" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>users</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate('Admin')}>
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons name="vcard" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>User List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => {
            navigation.navigate('Scanner');
          }}>
          <View style={styles.categoryIcon}>
            <Fontisto name="shopping-barcode" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Scanner</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.categoryContainer, {marginTop: 10}]}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons name="plus" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Add More</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons
              name="power-off"
              size={35}
              color="#FF6347"
            />
          </View>
          <Text style={styles.categoryBtnTxt}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
            <MaterialIcons name="expand-more" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Show More</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsWrapper}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Recently Viewed
        </Text>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={{
                uri: 'https://www.beaconhouse.net/wp-content/uploads/2017/04/welcome-image.png',
              }}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amazing and best stuf</Text>

            <Text style={styles.cardDetails}>
              Amazing description for this amazing place
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={{
                uri: 'https://dnd.com.pk/wp-content/uploads/2022/06/Beaconhouse-School-shortlisted-in-T4-Worlds-Best-School-Prizes.jpeg',
              }}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amazing decorts</Text>

            <Text style={styles.cardDetails}>
              Amazing description for this amazing place
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={{
                uri: 'https://www.beaconhouse.net/wp-content/uploads/2017/07/pics-01-450x300.jpg',
              }}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amazing envirnment</Text>

            <Text style={styles.cardDetails}>
              Amazing description for this amazing place
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#fdeae7' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#de4f35',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
