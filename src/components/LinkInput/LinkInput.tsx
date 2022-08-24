import React, { FC, useCallback, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import { Button } from "components/Button";

interface LinkInputProps {
  linkInputTitle: string;
  inputPlaceholder: string;
  buttonTitle: string;
  submitTextInput: (url: string) => void;
}

const LinkInput: FC<LinkInputProps> = ({
  linkInputTitle,
  inputPlaceholder,
  buttonTitle,
  submitTextInput,
}) => {
  const [inputValue, setInputValue] = useState("");
  console.log("LinkInput");
  const memoFetchIssues = useCallback(() => {
    submitTextInput(inputValue);
  }, []);
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputTitle}>{linkInputTitle}</Text>
      <TextInput
        style={styles.inputSection}
        placeholder={inputPlaceholder}
        defaultValue={inputValue}
        onChangeText={(newValue) => setInputValue(newValue)}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Button
        title={buttonTitle}
        onPress={() => memoFetchIssues()}
        background="#000"
      />
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
