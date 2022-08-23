import { colors } from "react-native-elements";

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
 parant:{
  width:400,
  height:750,
  backgroundColor:'#ff6b81',

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



});


  


