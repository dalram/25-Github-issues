import React, { FC, useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { useIssuesContext } from "contexts/IssuesContext";
import { logRender } from "utils/logRender";
import { sortingTypes } from "utils/sortingTypes";

import { Button } from "components/Button";

enum SortingType {
  TitleAsc = "TitleAsc",
  TitleDesc = "TitleDesc",
  DateAsc = "DateAsc",
  DateDesc = "DateDesc",
}

const SortingModal: FC = () => {
  const { issuesData, setIssuesData, setSortingType } = useIssuesContext();
  const [modalVisible, setModalVisible] = useState(false);

  logRender("SortingModal");
  const {
    sortTitleAsc,
    sortTitleDesc,
    sortDateAsc,
    sortDateDesc,
    defaultSorting,
  } = sortingTypes(issuesData);

  // sortingIssues function
  const sortingIssues = (type: string) => {
    if (type === SortingType.TitleAsc) {
      setIssuesData(sortTitleAsc);
      setModalVisible(false);
      setSortingType(SortingType.TitleAsc);
    }
    if (type === SortingType.TitleDesc) {
      setIssuesData(sortTitleDesc);
      setModalVisible(false);
      setSortingType(SortingType.TitleDesc);
    }
    if (type === SortingType.DateAsc) {
      setIssuesData(sortDateAsc);
      setModalVisible(false);
      setSortingType(SortingType.DateAsc);
    }
    if (type === SortingType.DateDesc) {
      setIssuesData(sortDateDesc);
      setModalVisible(false);
      setSortingType(SortingType.DateDesc);
    }
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Sort Issues</Text>
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.container}>
              <Button
                title="By title asc"
                onPress={() => sortingIssues(SortingType.TitleAsc)}
                background="#161959"
              />
              <Button
                title="By title desc"
                onPress={() => sortingIssues(SortingType.TitleDesc)}
                background="#161959"
              />
            </View>
            <View style={styles.container}>
              <Button
                title="By date asc"
                onPress={() => sortingIssues(SortingType.DateAsc)}
                background="#0d400f"
              />
              <Button
                title="By date desc"
                onPress={() => sortingIssues(SortingType.DateDesc)}
                background="#0d400f"
              />
            </View>
          </View>
          <View style={styles.containerClear}>
            <Button
              title="Default sorting"
              onPress={() => {
                setIssuesData(defaultSorting);
                setModalVisible(false);
                setSortingType("");
              }}
              background="#2f3648"
            />
          </View>
          <View style={styles.container}>
            <Button
              title="Close Modal"
              onPress={() => setModalVisible(false)}
              background="#eb4034"
            />
          </View>
        </View>
      </Modal>
      <Button
        title="Sort Issues"
        onPress={() => setModalVisible(true)}
        background="#000"
      />
    </View>
  );
};

export default SortingModal;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  containerClear: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  buttonContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: 5,
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    margin: 5,
  },
  titleContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "column",
    fontSize: 20,
    fontWeight: "600",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
});
