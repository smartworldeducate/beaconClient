

const React = require("react-native");

const { StyleSheet } = React;

export const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: "center",
    backgroundColor:'#ff4757',
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 30,
    textAlign: "center",
    color:'#ecf0f1'
  },
  loginFormView: {
    flex: 1,
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: "#b71540",
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    width: 350,
    alignItems: "center"
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
 
 text:{
  fontSize:30,
  fontWeight:'bold',
  color:'white',
  alignItems:'center',
  textAlign:'center',
  justifyContent:'center',
  padding:30

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



});


  


