import { useFonts } from "expo-font";
import { useEffect } from "react";
import HomeScreen from "./src/app/home";
import { setBackgroundColorAsync, getBackgroundColorAsync } from "expo-navigation-bar"

export default function App() {
  const [font, err] = useFonts({
    "inter": require("./assets/fonts/inter/inter.ttf")
  })

  if(!font){
    return null
  }

  setBackgroundColorAsync("#1A1A1A")

  return <HomeScreen />
}
