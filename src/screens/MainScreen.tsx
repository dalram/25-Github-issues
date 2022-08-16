import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import LinkInput from "components/LinkInput/LinkInput";
import Navigation from "components/Navigation/Navigation";
import IssuesList from "components/IssuesList/IssuesList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "types";
import { useIssuesData } from "hooks/useIssuesData";

type Props = NativeStackScreenProps<RootStackParams, "Issues">;

const MainScreen: FC<Props> = ({ navigation, route }) => {
  const { isLoading, issuesData, fetchIssues } = useIssuesData();
  return (
    <View style={styles.container}>
      <LinkInput fetchIssues={fetchIssues} />
      <IssuesList
        navigation={navigation}
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
