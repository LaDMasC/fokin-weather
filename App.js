import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alart } from "react-native";
import Loading from "./Loading";
import * as Location from 'expo-location';
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "36f3f4da1efd2298282d64c76f290685";

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    const { data: {main, weather} } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    console.log(main.temp);
    console.log(weather[0].main);
    this.setState({ isLoading: false, temp: main.temp, condition: weather[0].main});
  }
  getLoacation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      console.debug(latitude, longitude);

      this.getWeather(latitude, longitude)

    } catch (error) {
      Alart.alart("Can't find you", "So sad");
    }
  }
  componentDidMount() {
    this.getLoacation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    console.log(this.state);
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}