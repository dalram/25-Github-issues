import React, { FC } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { DataItem } from "types";

type IssuesItemProps = {
  item: DataItem;
  onIssuePress: (item: DataItem) => void;
};

const IssuesItem: FC<IssuesItemProps> = ({ item, onIssuePress }) => {
  return (
    <View style={styles.issueContainer}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={() => {
          onIssuePress(item);
        }}
      >
        <View style={styles.issueTitle}>
          <Text>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default IssuesItem;

const styles = StyleSheet.create({
  issueContainer: {
    flex: 1,
    margin: 5,
  },
  issueTitle: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column-reverse",
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 10,
  },
  pressedItem: {
    backgroundColor: "#06B033",
    opacity: 0.5,
    borderRadius: 10,
  },
});
