import React, { Component } from 'react';
import Swiper from 'react-native-deck-swiper';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground, Image } from 'react-native';
import {initializeApp} from 'firebase/app';
import { collection, query, where, getDocs, getFirestore, addDoc } from "firebase/firestore";
import moment from "moment";
import * as NavigationBar from 'expo-navigation-bar';
import { StatusBar } from 'expo-status-bar';
import ToastManager, { Toast } from 'toastify-react-native'

const firebaseConfig = {
  apiKey: "AIzaSyApNZMXnw0dOJQbQ83If16T2TKv3tRxq50",
  authDomain: "neilitnenews.firebaseapp.com",
  projectId: "neilitnenews",
  storageBucket: "neilitnenews.firebasestorage.app",
  messagingSenderId: "243559559007",
  appId: "1:243559559007:web:29f116caf6570e7f8490ea"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default class Bookmark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: "Trending",
      articlesArr: []
    }
    this.swiperRef = null;
  }
  async componentDidMount(){
    this.getBookmarks();
    NavigationBar.setBackgroundColorAsync("#fff");
    NavigationBar.setButtonStyleAsync("dark");
    this.focusListener = this.props.navigation.addListener('focus', () => {
        this.getBookmarks();
    });
  }
  getBookmarks = async() => {
    let tempArr = [];
    const q = query(collection(db, "bookmarks"));
    const dataReceived = await getDocs(q);
    dataReceived.forEach((item) => {
      tempArr.push(item.data())
    })
    console.log(tempArr)
    this.setState({articlesArr: tempArr})
  }
  bookmarkArticle = async(index) => {
    let {articlesArr} = this.state;
    addDoc(collection(db, "bookmarks"), {
      title: articlesArr[index].title,
      description: articlesArr[index].description,
      id: articlesArr[index].id,
      timestamp: articlesArr[index].timestamp,
      photo: articlesArr[index].photo,
      bookmarked_date: moment(new Date()).format("hh:mm A, Do MMMM YYYY")
    });
    Toast.show({
      type: 'info',
      text1: 'Article Bookmarked'
    })
  }
  checkIfBookmarked = async(index) => {
    let temp;
    const q = query(collection(db, "bookmarks"), where("id", "==", this.state.articlesArr[index].id));
    const dataReceived = await getDocs(q);
    dataReceived.forEach((item) => {
      temp = item.data();
    })
    if(temp){
      Toast.show({
        type: 'info',
        text1: 'Article Already Bookmarked',
        position: "bottom"
      })
    }
    else{
      this.bookmarkArticle(index)
    }
    console.log(tempArr)
    this.setState({articlesArr: tempArr})
  }
  letMeNavigate = (index) => {
    this.props.navigation.navigate("Article Details")
  }
  render() {
    let {activeButton, articlesArr} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"#fff"} style="dark" />
        {
          this.state.articlesArr.length > 0 ?
          <View style={styles.swiperContainer}>
            <Swiper
              ref={data => {
                this.swiperRef = data;
              }}
              onTapCard={(index) => this.letMeNavigate(index)}
              cards={articlesArr}
              renderCard={(item) => {
                return (
                  <View style={styles.card}>
                    <ImageBackground
                      source={{ uri: item?.photo }}
                      resizeMode="cover"
                      style={styles.imageBackground}
                      imageStyle={{ borderTopLeftRadius: 18, borderTopRightRadius: 18 }}
                    >
                      <TouchableOpacity>
                        <Image source={require("../assets/share.png")} style={{height: 40, width: 40, marginLeft: "84%", marginTop: 11}} />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Image source={require("../assets/delete.png")} style={{height: 40, width: 40, marginLeft: "84%", marginTop: 11}} />
                      </TouchableOpacity>
                    </ImageBackground>
                    <View style={styles.cardContent}>
                      <Text style={{fontSize: 12, color: "#a4a4a4", marginTop: 5}}>{item?.timestamp}</Text>
                      <Text style={styles.cardHeaderText}>{item?.title}</Text>
                      <Text style={{fontSize: 14, color: "#222", marginTop: 7, lineHeight: 19}}>
                        {item?.description}
                      </Text>
                    </View>
                  </View>
                );
              }}
              cardIndex={0}
              infinite={true}
              backgroundColor={'#f9f9f9'}
              stackSize={2}
            />
          </View>
          :
          <View>
            <Text style={{textAlign: "center", fontSize: 24, marginTop: 25, marginBottom: 10, fontWeight: "bold"}}>No Bookmarks</Text>
        </View>
        }
        <ToastManager bottomOffset={60}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2",
    paddingTop: "6%",
  },
  activeButton: {
    backgroundColor: "#e83735", width: 130, height: 35, borderRadius: 100, alignItems: "center", justifyContent: "center", marginHorizontal: 10
  },
  firstActiveButton: {
    backgroundColor: "#e83735", width: 130, height: 35, borderRadius: 100, alignItems: "center", justifyContent: "center", marginRight: 10, marginLeft: 25
  },
  activeButtonTxt: {
    color: "#fff", fontSize: 14.5, fontWeight: "bold"
  },
  inactiveButton: {
    marginHorizontal: 12,
  },
  firstInactiveButton: {
    marginRight: 12, marginLeft: 25
  },
  inactiveButtonTxt:{
    color: "#6c6c6c", fontSize: 14.5, fontWeight: "bold"
  },
  swiperContainer: {
    width: '100%',
    marginTop: -25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  card: {
    backgroundColor: "#fff",
    width: "90%",
    height: 565,
    marginHorizontal: "6%",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1, },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2
  },
  imageBackground: {
    width: "100%",
    height: 250
  },
  cardContent: {
    padding: "5%",
  },
  cardHeaderText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#333',
    lineHeight: 25
  },
});
