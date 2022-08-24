import React, { FC, useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { useIssuesContext } from "contexts/IssuesContext";

import { Button } from "components/Button";

const SortingModal: FC = () => {
  const { issuesData, setIssuesData, setSortingType } = useIssuesContext();
  const [modalVisible, setModalVisible] = useState(false);

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
                onPress={() => {
                  setIssuesData(
                    [...issuesData].sort((a, b) =>
                      a.title.localeCompare(b.title)
                    )
                  );
                  setModalVisible(false);
                  setSortingType("title asc");
                }}
                background="#161959"
              />
              <Button
                title="By title desc"
                onPress={() => {
                  setIssuesData(
                    [...issuesData].sort((a, b) =>
                      b.title.localeCompare(a.title)
                    )
                  );
                  setModalVisible(false);
                  setSortingType("title desc");
                }}
                background="#161959"
              />
            </View>
            <View style={styles.container}>
              <Button
                title="By date asc"
                onPress={() => {
                  setIssuesData(
                    [...issuesData].sort((a, b) =>
                      a.created_at.localeCompare(b.created_at)
                    )
                  );
                  setModalVisible(false);
                  setSortingType("creation date asc");
                }}
                background="#0d400f"
              />
              <Button
                title="By date desc"
                onPress={() => {
                  setIssuesData(
                    [...issuesData].sort((a, b) =>
                      b.created_at.localeCompare(a.created_at)
                    )
                  );
                  setModalVisible(false);
                  setSortingType("creation date desc");
                }}
                background="#0d400f"
              />
            </View>
          </View>
          <View style={styles.containerClear}>
            <Button
              title="Clear sorting"
              onPress={() => {
                setIssuesData(issuesData.sort((a, b) => a.row - b.row));
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
