import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useIssuesData } from "hooks/useIssuesData";
import { DataItem, RootStackParams } from "types";

import { IssuesList } from "components/IssuesList";
import { Navigation } from "components/Navigation";
import { SortingModal } from "components/SortingModal";

import { NavigationPages } from "../MainStackNavigation";

type Props = NativeStackScreenProps<RootStackParams, NavigationPages.Issues>;

const IssuesScreen: FC<Props> = ({ navigation, route }) => {
  const { isLoading, issuesData } = useIssuesData();
  const onIssuePress = (item: DataItem) =>
    navigation.navigate(NavigationPages.Issue, item);
  return (
    <View style={styles.container}>
      <View style={styles.issues}>
        <IssuesList
          onIssuePress={onIssuePress}
          route={route}
          isLoading={isLoading}
          issuesData={issuesData}
        />
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
