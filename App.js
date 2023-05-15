import Home from "./screens/home";
import {useState, useCallback,useEffect} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from "./screens/about";
import Review from "./screens/review";
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    "Poppins-Bold":require("./assets/fonts/Poppins-Bold.ttf")
  })

  

  function MyDrawer() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    );
  }

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
          <Stack.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: true }} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Review" component={Review} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

}

