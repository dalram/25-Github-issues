import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useIssuesData } from "hooks/useIssuesData";
import { DataItem, RootStackParams } from "types";

import IssuesList from "components/IssuesList/IssuesList";
import LinkInput from "components/LinkInput/LinkInput";
import Navigation from "components/Navigation/Navigation";

import { NavigationPages } from "../MainStackNavigation";

type MainScreenProps = NativeStackScreenProps<
  RootStackParams,
  NavigationPages.Issues
>;

const MainScreen: FC<MainScreenProps> = ({ navigation, route }) => {
  const { isLoading, issuesData, fetchIssues, isUrlProvided } = useIssuesData();
  const linkInputTitles = [
    "Provide GitHub organization or repository link and fetch issues!",
    "Your Github link",
    "Fetch issues",
  ];
  const onIssuePress = (item: DataItem) =>
    navigation.navigate(NavigationPages.Issue, item);

  return (
    <View style={styles.container}>
      <LinkInput
        submitTextInput={fetchIssues}
        linkInputTitle={linkInputTitles[0]}
        inputPlaceholder={linkInputTitles[1]}
        buttonTitle={linkInputTitles[2]}
      />
      <IssuesList
        onIssuePress={onIssuePress}
        route={route}
        isLoading={isLoading}
        issuesData={issuesData}
        isUrlProvided={isUrlProvided}
        shouldShowText={false}
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
