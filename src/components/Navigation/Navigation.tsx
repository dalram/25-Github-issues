import React, { FC } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "types";

import { NavigationPages } from "../../MainStackNavigation";

const Navigation: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={styles.navigationContainer}>
      <View style={styles.navItem}>
        <Pressable
          style={styles.navBorder}
          onPress={() => {
            navigation.navigate(NavigationPages.Main);
          }}
        >
          <Text style={styles.navTitle}>Main page</Text>
        </Pressable>
      </View>
      <View style={styles.navItem}>
        <Pressable
          style={styles.navBorder}
          onPress={() => {
            navigation.navigate(NavigationPages.Issues);
          }}
        >
          <Text style={styles.navTitle}>Issues List</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  navigationContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: 10,
  },
  navBorder: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
  },
  navItem: {
    marginRight: 10,
  },
  navTitle: {
    fontWeight: "bold",
    color: "#4248f5",
  },
});
