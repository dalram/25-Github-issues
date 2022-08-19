import React, { FC } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { RouteProp } from "@react-navigation/native";
import { NavigationPages } from "MainStackNavigation*";
import { DataItem, RootStackParams } from "types";

import { IssuesItem } from "components/IssuesItem";

type IssuesListProp = {
  onIssuePress: (item: DataItem) => void;
  route: RouteProp<RootStackParams, NavigationPages.Issues>;
  isLoading: boolean;
  issuesData: DataItem[];
};
const IssuesList: FC<IssuesListProp> = ({
  onIssuePress,
  isLoading,
  issuesData,
}) => {
  return (
    <View style={styles.issuesList}>
      <Text style={styles.issuesTitle}>Browse your repository issues</Text>
      <FlatList
        data={issuesData}
        renderItem={(item) => {
          return <IssuesItem item={item.item} onIssuePress={onIssuePress} />;
        }}
        keyExtractor={(item) => `${item.id}`}
        ListEmptyComponent={
          isLoading ? (
            <ActivityIndicator size="large" />
          ) : (
            <Text style={styles.issuesNotProvided}>
              Github link not provided
            </Text>
          )
        }
      />
    </View>
  );
};

export default IssuesList;

const styles = StyleSheet.create({
  issueTitle: {
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column-reverse",
    borderWidth: 1,
    borderColor: "green",
  },
  issuesList: {
    flex: 4,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 32,
    paddingHorizontal: 24,
  },
  issuesTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  issuesNotProvided: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: "400",
    color: "crimson",
  },
});
