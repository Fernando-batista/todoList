import { useFonts } from "expo-font";
import { useEffect } from "react";
import HomeScreen from "./src/app/home";
import  Load from "./src/app/load";
import { setBackgroundColorAsync } from "expo-navigation-bar";
import * as splashScreen from "expo-splash-screen";

splashScreen.preventAutoHideAsync();

export default function App() {
  const [font, err] = useFonts({
    "inter": require("./assets/fonts/inter/inter.ttf")
  })

  if(err){
    return <Load />
  }

  useEffect(()=>{
    (async ()=>{
      if(font){
        await setBackgroundColorAsync("#1A1A1A");
        await splashScreen.hideAsync();
      }
      else{
        return <Load />
      }
    })();
  }, [font])

  return <HomeScreen />
}
