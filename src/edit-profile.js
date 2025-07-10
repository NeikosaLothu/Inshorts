import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from "react-native"

export default class EditProfile extends Component {
  render(){
    return(
        <View>
            <Text style={{textAlign: "center", fontSize: 24, marginTop: 25, marginBottom: 10, fontWeight: "bold"}}>Edit Profile</Text>
        </View>
    )
  }
}