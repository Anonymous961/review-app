import Home from "./screens/home";
import {useState, useCallback,useEffect} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from "./screens/about";
import Review from "./screens/review";

export default function App() {

  const [fontsLoaded] = useFonts({
    "Poppins-Bold":require("./assets/fonts/Poppins-Bold.ttf")
  })

  const Stack = createNativeStackNavigator();

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
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Review" component={Review} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

}

