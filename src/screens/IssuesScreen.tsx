import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Navigation } from "components/Navigation";
import { IssuesList } from "../components/IssuesList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../types";
import { SortingModal } from "components/SortingModal";

type Props = NativeStackScreenProps<RootStackParams, "Issues">;

const IssuesScreen: FC<Props> = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.issues}>
        <IssuesList navigation={navigation} route={route} />
      </View>
      <View style={styles.sorting}>
        <SortingModal />
      </View>
      <View style={styles.nav}>
        <Navigation />
      </View>
    </View>
  );
};

export default IssuesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sorting: {
    flex: 2,
  },
  issues: {
    flex: 10,
  },
  nav: {
    flex: 1,
    marginBottom: 20,
  },
});
