import {
  Koulen_400Regular,
  useFonts as useKoulenFonts,
} from '@expo-google-fonts/koulen';
import {
  useFonts as useLatoFonts,
  Lato_400Regular,
  Lato_900Black,
} from '@expo-google-fonts/lato';
import * as SplashScreen from 'expo-splash-screen';
import {useCallback, useEffect, useState} from 'react';
SplashScreen.preventAutoHideAsync();
export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  let [latoFontsLoaded] = useLatoFonts({
    Lato_400Regular,
    Lato_900Black,
  });
  let [koulenFontsLoaded] = useKoulenFonts({
    Koulen_400Regular,
  });
  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
    setLoadingComplete(true);
  }, []);

  useEffect(() => {
    if (latoFontsLoaded && koulenFontsLoaded) {
      onLayoutRootView();
    }
  }, [latoFontsLoaded, koulenFontsLoaded, onLayoutRootView]);

  return isLoadingComplete;
}
