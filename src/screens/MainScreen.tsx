import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import LinkInput from "components/LinkInput/LinkInput";
import Navigation from "components/Navigation/Navigation";
import IssuesList from "components/IssuesList/IssuesList";
import { useIssuesContext } from "../contexts/IssuesContext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../types";

type Props = NativeStackScreenProps<RootStackParams, "Issues">;

const MainScreen: FC<Props> = ({ navigation, route }) => {
  const { setIssuesData } = useIssuesContext();
  return (
    <View style={styles.container}>
      <LinkInput />
      {/* <View style={styles.container}>
        <MyButton
          title="Check API data"
          onPress={() => console.log(typeof issuesData)}
        />
      </View> */}
      <IssuesList navigation={navigation} route={route} />
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
