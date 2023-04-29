import { Stack } from "expo-router";
import { useCallback, useState } from "react";
import { Text, View } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function Layout() {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
      DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
      DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    });
    setFontLoaded(true);
  };

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    loadFonts();
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return <Stack onLayout={onLayoutRootView} />;
}
