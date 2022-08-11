import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { RootStackParams, DataItem } from "../types";
import { useIssuesContext } from "../contexts/IssuesContext";
import IssuesItem from "./IssuesItem";

type Props = NativeStackScreenProps<RootStackParams, "Issues">;

const IssuesList: FC<Props> = ({ navigation }) => {
  const { issuesData, inputValue } = useIssuesContext();
  return (
    <View style={styles.issuesList}>
      <Text style={styles.issuesTitle}>Browse your repository issues</Text>
      {issuesData.length !== 0 ? (
        <FlatList
          data={issuesData}
          renderItem={(item) => {
            return (
              <IssuesItem
                item={item.item}
                onPress={(item) => {
                  navigation.navigate("Issue", item);
                }}
              />
            );
          }}
          keyExtractor={(item) => `${item.id}`} // keyExtractor turi gaut string`a
        />
      ) : (
        <Text style={styles.issuesNotProvided}>Github link not provided</Text>
      )}
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
