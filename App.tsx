import { useFonts } from "expo-font";
import HomeScreen from "./src/app/home";
import  Load from "./src/app/load";
import { setBackgroundColorAsync } from "expo-navigation-bar";

export default function App() {
  const [font, err] = useFonts({
    "inter": require("./assets/fonts/inter/inter.ttf")
  })

  if(!font){
    return <Load />
  }

  setBackgroundColorAsync("#1A1A1A")

  return <HomeScreen />
}
