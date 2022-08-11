import React, { FC, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useIssuesContext } from "../contexts/IssuesContext";
import { useIssuesData } from "../hooks/useIssuesData";
import { DataItem } from "../types";
import Button from "./Button";

interface Props {
  setIssuesData: React.Dispatch<React.SetStateAction<DataItem[]>>;
}

const LinkInput: FC = () => {
  const { fetchIssues } = useIssuesData();
  const { issuesData, setIssuesData, inputValue, setInputValue } =
    useIssuesContext();
  //   https://github.com/front-end-by-rimantas/35-grupe-portfolio-spet
  //   https://github.com/dalram/20-bandomasis/issues

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputTitle}>
        Provide GitHub organization or repository link and fetch issues!
      </Text>
      <TextInput
        style={styles.inputSection}
        placeholder="Your Github link"
        defaultValue={inputValue}
        onChangeText={(newValue) => setInputValue(newValue)}
      />
      <Button title="Fetch issues" onPress={() => fetchIssues(inputValue)} />
    </View>
  );
};

export default LinkInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32,
    paddingHorizontal: 24,
  },
  inputTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  inputSection: {
    marginTop: 18,
    fontSize: 18,
    fontWeight: "400",
  },
});
