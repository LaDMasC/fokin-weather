import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Clouds: {
        iconName: "cloud",
        gradient: ["#43cea2","#185a9d"],
        title: "Cloudy today",
        subtitle:"산책한바퀴 어떠신가요"
    },
    Thunderstorm:{
        iconName: "weather-lightning-rainy",
        gradient: ["#24C6DC","#514A9D"],
        title: "Thunderstorm today",
        subtitle:"나가면 위험!"
    },
    Drizzle:{
        iconName: "weather-rainy",
        gradient: ["#43cea2","#185a9d"],
        title: "Drizzle today",
        subtitle:"가랑비에 옷 젖는줄 모른다"
    },
    Rain:{
        iconName: "weather-pouring",
        gradient: ["#24C6DC","#514A9D"],
        title: "Rainy today",
        subtitle: "우산을 꼭 챙기세요"
    },
    Snow:{
        iconName: "weather-snowy-heavy",
        gradient: ["#DAE2F8","#D6A4A4"],
        title: "Snow today",
        subtitle: "밖에서 눈사람 만들사람~"
    },
    Atmosphere:{
        iconName: "cloud",
        gradient: ["#43cea2","#185a9d"],
        title: "",
        subtitle:""
    },
    Clear:{
        iconName: "weather-sunny",
        gradient: ["#FFB88C","#DE6262"],
        title: "Clear taday",
        subtitle: "맑은 날엔 산책!"
    },
    Mist:{
        iconName: "weather-hail",
        gradient: ["#96DEDA","#50C9C3"],
        title: "Mist today",
        subtitle: "안개낀날엔 안전운전!"
    },
    Smoke:{
        iconName: "weather-cloudy",
        gradient: ["#8CA6DB","#B993D6"],
        title: "Smoke today",
        subtitle: "마스크 착용 필수!"
    },
    Haze:{
        iconName: "weather-fog",
        gradient: ["#8CA6DB","#B993D6"],
        title: "Haze today",
        subtitle: "안개낀날엔 안전운전!"
    },
    Dust:{
        iconName: "weather-fog",
        gradient: ["#BFE6BA","#D3959B"],
        title: "Dust today Oh my God",
        subtitle:"마스크 착용 필수!"
    },
    Fog:{
        iconName: "weather-fog",
        gradient: ["#8CA6DB","#B993D6"],
        title: "Fog today",
        subtitle:"안개낀날엔 안전운전!"
    },
    Sand:{
        iconName: "weather-fog",
        gradient: ["#BFE6BA","#D3959B"],
        title: "Sand today",
        subtitle:"마스크 착용 필수!"
    },
    Ash:{
        iconName: "weather-fog",
        gradient: ["#606c88","#3f4c6b"],
        title: "Ash today",
        subtitle:"안개낀날엔 안전운전!"
    },
    Squall:{
        iconName: "weather-pouring",
        gradient: ["#96DEDA","#50C9C3"],
        title: "Squall today",
        subtitle:"안개낀날엔 안전운전!"
    },
    Tornado:{
        iconName: "weather-tornado",
        gradient: ["#E6DADA","#274046"],
        title: "Tornado today!",
        subtitle:"나가면 위험해요!"
    }
};

export default function Weather({temp, condition}){
    return (
        <LinearGradient
          colors={weatherOptions[condition].gradient}
          style = {styles.container}>
              <StatusBar barStyle="light-content"/>
            <View style = {styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={160} color="white" />
                <Text style={styles.textTemp}>{temp}°</Text>
            </View>
            <View style = {styles.textContainer}> 
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subTitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Atmosphere","Clear","Clouds","Mist","Smoke","Haze","Fog","Sand","Dust","Ash","Squall","Tornado"]).isRequired
}

const styles = StyleSheet.create({
    container :{
        flex :1,
        justifyContent: "center",
        alignItems: "center",
    },
    halfContainer: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    textTemp: {
        fontSize: 50,
        color: "white",
        
    },
    title:{
        color: "white",
        fontSize:45,
        fontWeight: "300",
        marginBottom: 10
    },
    subTitle: {
        color: "white",
        fontWeight:"600",
        fontSize: 24,
    },
    textContainer: {
        flex:1,
        
        justifyContent: "center",
        alignItems: "flex-start",
        paddingHorizontal:20,
    }
});