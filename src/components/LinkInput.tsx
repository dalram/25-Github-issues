import React, {FC, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import DataItem from '../dataItem';
import Button from './Button';

interface Props {
  setIssuesData: React.Dispatch<React.SetStateAction<DataItem[]>>;
}

const LinkInput: FC<Props> = props => {
  const [inputValue, setInputValue] = useState<string>('');
  const handleInputValue = (link: string) => {
    const githubAccountName: string = link.split('/')[3];
    const githubRepositoryName: string = link.split('/')[4];
    fetch(
      `https://api.github.com/repos/${githubAccountName}/${githubRepositoryName}/issues`,
    )
      .then(resp => resp.json())
      .then(data => props.setIssuesData(data));
    setInputValue('');
  };
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
        onChangeText={newValue => setInputValue(newValue)}
      />
      <Button
        title="Fetch issues"
        onPress={() => handleInputValue(inputValue)}
      />
    </View>
  );
};

export default LinkInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  inputTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  inputSection: {
    marginTop: 18,
    fontSize: 18,
    fontWeight: '400',
  },
});
