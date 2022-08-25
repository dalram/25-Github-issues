import React, { FC, useCallback } from "react";
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
const enum LinkInputTitles {
  linkInputTitle = "Provide GitHub organization or repository link and fetch issues!",
  inputPlaceholder = "Your Github link",
  buttonTitle = "Fetch issues",
}

const MainScreen: FC<MainScreenProps> = ({ navigation, route }) => {
  const { isLoading, issuesData, fetchIssues, isUrlProvided } = useIssuesData();
  const LinkInputCallBack = useCallback(() => {
    return (
      <LinkInput
        submitTextInput={fetchIssues}
        linkInputTitle={LinkInputTitles.linkInputTitle}
        inputPlaceholder={LinkInputTitles.inputPlaceholder}
        buttonTitle={LinkInputTitles.buttonTitle}
      />
    );
  }, []);
  const onIssuePress = (item: DataItem) =>
    navigation.navigate(NavigationPages.Issue, item);

  return (
    <View style={styles.container}>
      <LinkInputCallBack />
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
