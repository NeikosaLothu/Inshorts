import React, { Component } from 'react';
import {View, Text, TouchableOpacity, TextInput, Image, ScrollView} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { getApp, getApps, initializeApp } from "firebase/app";
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import * as NavigationBar from 'expo-navigation-bar';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyApNZMXnw0dOJQbQ83If16T2TKv3tRxq50",
  authDomain: "neilitnenews.firebaseapp.com",
  projectId: "neilitnenews",
  storageBucket: "neilitnenews.firebasestorage.app",
  messagingSenderId: "243559559007",
  appId: "1:243559559007:web:29f116caf6570e7f8490ea"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isHidden: true
    }
  }
  login = () => {
    let {email, password} = this.state;
    signInWithEmailAndPassword(auth, email, password)
    .then(async(userCredential) => {
      const user = userCredential.user;
      await AsyncStorage.setItem('key', JSON.stringify(user));
      this.props.navigation.navigate("Tabs")
    })
    .catch((error) => {
      alert("Not LOGGED IN" + error)
    });
  }
  async componentDidMount(){
    let temp = await AsyncStorage.getItem('key');
    if(temp != null){
      this.props.navigation.navigate("Tabs")
    }
    NavigationBar.setBackgroundColorAsync("#F6F6F6");
    NavigationBar.setButtonStyleAsync("dark");
  }
  render(){
    let {email, password, isHidden} = this.state;
    return(
        <View style={{backgroundColor: "#F6F6F6", flex: 1}}>
          <StatusBar backgroundColor={"#F6F6F6"} style="dark" />
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 15}}>
            <Image source={require("../assets/banner.png")} style={{height: 75, width: "100%", marginTop: "16%"}} resizeMode="contain" />
            <Text style={{textAlign: "center", fontSize: 24, marginTop: 5, marginBottom: 5, fontWeight: "bold", lineHeight:32}}>Stay update with important{"\n"}happenings</Text>
            <Text style={{opacity: 0.5, textAlign: "center", fontSize: 14, marginBottom: "8%"}}>Login to your account to find all saved articles</Text>
            <Text style={{marginHorizontal: "5%", fontWeight: "bold", fontSize: 16, marginBottom: 7}}>Email ID</Text>
            <TextInput
              style={{
                  width:"90%",
                  height:50,
                  marginHorizontal: "5%",
                  backgroundColor: "#fff",
                  paddingHorizontal: 13,
                  borderRadius: 8,
                  color: "#000",
                  fontSize: 16
              }}
              value={email}
              placeholder={"Enter Email ID"}
              placeholderTextColor={"#9E9E9E"}
              onChangeText={(txt) =>  this.setState({email: txt})}
              keyboardType="email-address"
            />
            <Text style={{marginHorizontal: "5%", fontWeight: "bold", fontSize: 16, marginBottom: 7, marginTop: 25}}>Password</Text>
            <View style={{flexDirection: "row", width:"90%", marginHorizontal: "5%"}}>
              <TextInput
                style={{
                    width: "100%",
                    height:50,
                    backgroundColor: "#fff",
                    paddingHorizontal: 13,
                    borderRadius: 8,
                    color: "#000",
                    fontSize: 16
                }}
                value={password}
                placeholder={"Enter Password"}
                placeholderTextColor={"#9E9E9E"}
                onChangeText={(txt) =>  this.setState({password: txt})}
                secureTextEntry={isHidden}
              />
              <TouchableOpacity onPress={()=>this.setState({isHidden: !this.state.isHidden})} style={{position: "absolute", right: 10, top: 15}}>
                <AntDesign name="eyeo" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={this.login}
                style={{backgroundColor: "red", paddingVertical: 14, borderRadius: 10, width: "90%", marginHorizontal: "5%", marginTop: 25}}>
                <Text style={{color: "#fff", fontWeight:"bold", textAlign: "center", fontSize: 16}}>LOGIN</Text>
            </TouchableOpacity>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: "5.5%", marginVertical: 22}}>
              <View style={{borderBottomWidth: 0.6, width: "44%", borderBottomColor: "#a5a5a5"}}>
              </View>
              <Text>Or</Text>
              <View style={{borderBottomWidth: 0.6, width: "44%", borderBottomColor: "#a5a5a5"}}>
              </View>
            </View>
            <TouchableOpacity
                onPress={()=>this.props.navigation.navigate("Register")}
                style={{backgroundColor: "#000", paddingVertical: 14, borderRadius: 10, width: "90%", marginHorizontal: "5%"}}>
                <Text style={{color: "#fff", fontWeight:"bold", textAlign: "center", fontSize: 16}}>REGISTER</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
    )
  }
}