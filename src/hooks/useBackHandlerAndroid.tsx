import { useEffect } from "react";
import { Alert, BackHandler } from "react-native";

const useBackHandlerAndroid = () => {
  const useBackHandler = () => {
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

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", useBackHandler);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", useBackHandler);
  }, []);
  return { useBackHandler };
};

export default useBackHandlerAndroid;
