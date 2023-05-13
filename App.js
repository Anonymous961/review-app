import Home from "./screens/home";
import * as Font from 'expo-font';
import {useState, useCallback,useEffect} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    "Poppins-Bold":require("./assets/fonts/Poppins-Bold.ttf")
  })

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if(!fontsLoaded){
    return undefined;
  }else{
    SplashScreen.hideAsync();
    return (
      <Home />
    );
  }

}

