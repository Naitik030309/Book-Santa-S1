import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import SantaAnimation from '../components/Santa-Claus';

export default class WelcomeScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            emailId: '',
            password: ''
        }
    }

    userSignUp = (emailId,password) => {
        firebase.auth().createUserWithEmailAndPassword(emailId,password)
        .then((response)=>{
            return(
                Alert.alert('User Added Successfully!')
            )
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            return(
                Alert.alert(errorMessage)
            )
        })
    }

    userLogin = (emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
          return Alert.alert("Successfully Login")
        })
        .catch((error)=> {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage)
        })
      }

    render(){
        return(
            <View style={styles.container}>
                <View style={{justifyContent:'center', alignItems:'center',}}>
                    <SantaAnimation/>
                    <Text style={styles.title}>Book Santa</Text>
                </View>
                <View style={{justifyContent:'center', alignItems:'center',}}>
                    <TextInput
                        style = {styles.loginBox}
                        placeholder = 'abc@example.com'
                        keyboardType = 'email-address'
                        onChangeText={(text)=>{
                            this.setState({
                                emailId: text
                            });
                        }}
                    />
                    <TextInput
                        style = {styles.loginBox}
                        placeholder = 'Enter password'
                        secureTextEntry={true}
                        onChangeText={(text)=>{
                            this.setState({
                                password: text
                            });
                        }}
                    />
                    <TouchableOpacity 
                        style={[styles.button,{marginBottom: 20, marginTop: 20}]}
                        onPress={()=>{
                            this.userLogin(this.state.emailId,this.state.password)
                        }}
                    >
                        <Text style = {styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={()=>{
                            this.userSignUp(this.state.emailId,this.state.password)
                        }}
                    >
                        <Text style = {styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F8BE85',
        justifyContent:'center',
      },
      profileContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
      },
      title :{
        fontSize:50,
        fontWeight:'300',
        paddingBottom:30,
        color : '#ff3d00',
        textAlign:'center'
      },
      loginBox:{
        width: 300,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor : '#ff8a65',
        fontSize: 20,
        margin:10,
        paddingLeft:50,
      },
      button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#ff9800",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
      },
      buttonText:{
        color:'#ffff',
        fontWeight:'200',
        fontSize:20
      },
      buttonContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',

      }
})