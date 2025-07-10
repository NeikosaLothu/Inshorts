import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from "react-native"

export default class ViewArticle extends Component {
  render(){
    return(
        <View>
            <Text style={{textAlign: "center", fontSize: 24, marginTop: 25, marginBottom: 10, fontWeight: "bold"}}>View Article</Text>
        </View>
    )
  }
}