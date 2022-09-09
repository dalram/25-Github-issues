import React, { FC, useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useIssuesContext } from "contexts/IssuesContext";
import { DataItem } from "types*";

// type SearchProp = {

// };

const Search: FC = () => {
  const [searchIssues, setSearchIssues] = useState("");
  const { issuesData, setIssuesData } = useIssuesContext();
  console.log(searchIssues);

  useEffect(() => {
    searchFilter(searchIssues);
  }, [searchIssues]);
  const searchFilter = (text: string) => {
    if (text.length === 3 || text.length > 3) {
      setIssuesData(
        [...issuesData].map((item: DataItem) =>
          item.title.toLowerCase().indexOf(text.toLowerCase())
            ? { ...item, show: false }
            : { ...item, show: true }
        )
      );
    } else {
      setIssuesData(
        [...issuesData].map((item: DataItem) => ({ ...item, show: true }))
      );
    }
  };
  return (
    <View style={styles.searchContainer}>
      <View style={styles.container}>
        <TextInput
          style={styles.inputSection}
          placeholder="I`m Search Bar"
          value={searchIssues}
          onChangeText={(newValue) => setSearchIssues(newValue)}
          autoCorrect={false}
        ></TextInput>
      </View>
      <View style={styles.searchIcon}>
        <Pressable onPress={() => console.log("Searching")}>
          <Text style={styles.inputSection}>Icon</Text>
        </Pressable>
      </View>
      {/* Suggestions */}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32,
    marginHorizontal: 24,
    borderWidth: 1,
    borderColor: "#397567",
    borderRadius: 8,
  },
  searchIcon: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  inputTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  inputSection: {
    padding: 15,
    fontSize: 18,
    fontWeight: "400",
    color: "#397567",
  },
});
