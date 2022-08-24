import React, { FC } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "types";

import { NavigationPages } from "../MainStackNavigation";

type IssueScreenProps = NativeStackScreenProps<
  RootStackParams,
  NavigationPages.Issue
>;

const IssueScreen: FC<IssueScreenProps> = ({ route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.issueTitle}>{route.params.title}</Text>
        <Text style={styles.issueDetails}>{route.params.body}</Text>
        <Text style={styles.issueDetails}>
          {route.params.assignees[0] !== undefined
            ? `Issue Assigned: ${route.params.assignees[0].login}`
            : "No one Assigned for this Issue"}
        </Text>
        <Text style={styles.issueDetails}>
          {route.params.created_at.split("T", 2).join(" ").replace("Z", "")}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IssueScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    marginTop: 24,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  issueTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: "bold",
  },
  issueDetails: {
    fontSize: 16,
    marginTop: 8,
    fontWeight: "bold",
  },
});
