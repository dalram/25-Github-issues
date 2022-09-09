import { useEffect } from "react";
import { Alert, BackHandler } from "react-native";

const useBackHandlerAndroid = () => {
  useEffect(() => {
    const backAction = () => {
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
    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);
};

export default useBackHandlerAndroid;
