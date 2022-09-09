import { useEffect } from "react";
import { Alert, BackHandler } from "react-native";

const onBackAction = () => {
  Alert.alert(
    "Wait a second!",
    "Are you sure you want to exit Github issues App?",
    [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel",
      },
      { text: "EXIT", onPress: () => BackHandler.exitApp() },
    ]
  );
  return true;
};

const useBackHandlerAndroid = (stopBubblingUp = true): void =>
  useEffect(() => {
    const onPressBack = (): boolean => {
      onBackAction();
      return stopBubblingUp;
    };
    BackHandler.addEventListener("hardwareBackPress", onPressBack);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", onPressBack);
  }, []);

export default useBackHandlerAndroid;
