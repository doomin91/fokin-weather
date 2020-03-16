import React from 'react';
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from 'expo-location';
import { fonts } from "./fonts"
import axios from "axios";

const API_KEY = "13d94a6845b92d3927b74dd43e5a9e59";

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  //Axios 라이브러리를 사용해서 oepnWeather API를 받아온다
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
  }
  
  //Expo.getLocation 을 이용해서 위도, 경도를 받아온다
  getLocation = async () => {
    try {

      throw Error();
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
      this.setState({ isLoading: false });

    } catch (error) {
      alert("날씨 정보를 받아올 수 없습니다.", "설정을 확인해주세요.");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }

}
