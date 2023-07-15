import { StyleSheet, Text, View, SafeAreaView} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from "react-native";
import React, { useState } from 'react'
import GameScreen from "./screens/GameScreen";

export default function App() {
   const [userNumber, setUserNumber] = useState();

    function pickedNumberHandler(pickedNumber){
        setUserNumber(pickedNumber)
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

    if(userNumber){
      screen = <GameScreen />
    }

  return (
    <LinearGradient
    colors={['#4e0329','#ffb52f']}
    style={styles.rootScreen}>
      <ImageBackground 
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
      source={require('./assets/images/background.png')}
      >
        <SafeAreaView style={styles.rootScreen}>
        {screen}
        </SafeAreaView>
      
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
      opacity: 0.15
  },
});
