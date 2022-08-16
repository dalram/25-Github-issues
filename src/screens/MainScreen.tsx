import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import LinkInput from "components/LinkInput/LinkInput";
import Navigation from "components/Navigation/Navigation";
import IssuesList from "components/IssuesList/IssuesList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DataItem, RootStackParams } from "types";
import { useIssuesData } from "hooks/useIssuesData";
import { NavigationPages } from "MainStackNavigation";

type Props = NativeStackScreenProps<RootStackParams, NavigationPages.Issues>;

const MainScreen: FC<Props> = ({ navigation, route }) => {
  const { isLoading, issuesData, fetchIssues } = useIssuesData();
  const onIssuePress = (item: DataItem) =>
    navigation.navigate(NavigationPages.Issue, item);
  return (
    <View style={styles.container}>
      <LinkInput fetchIssues={fetchIssues} />
      <IssuesList
        onIssuePress={onIssuePress}
        route={route}
        isLoading={isLoading}
        issuesData={issuesData}
      />
      <Navigation />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
