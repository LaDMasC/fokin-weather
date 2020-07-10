import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alart} from "react-native";
import Loading from "./Loading";
import * as Location from 'expo-location';

export default class extends React.Component {
  getLoacation = async() =>{
    try{
      await Location.requestPermissionsAsync();
      const location = await Location.getCurrentPositionAsync();
      console.debug(location);
    }catch(error){
      Alart.alart("Can't find you","So sad");
    }
  }
  componentDidMount(){
    this.getLoacation();
  }
  render(){
    return <Loading></Loading>
  }
}
