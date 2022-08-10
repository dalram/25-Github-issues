import React, {FC} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import DataItem from '../dataItem';

type Props = {
  item: DataItem;
  onPress: (
    title: string,
    created_at: string,
    assignees: [
      {
        login: string;
      }?,
    ],
    body: string,
  ) => void;
};

const IssuesItem: FC<Props> = ({item, onPress}) => {
  return (
    <View style={styles.issueContainer}>
      <Pressable
        style={({pressed}) => pressed && styles.pressedItem}
        onPress={() => {
          onPress(
            item.title,
            item.created_at,
            item.assignees ? item.assignees : [],
            item.body,
          );
        }}>
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
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column-reverse',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 10,
  },
  pressedItem: {
    backgroundColor: '#06B033',
    opacity: 0.5,
    borderRadius: 10,
  },
});
