import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import { Button } from "components/Button";

interface LinkInputProps {
  linkInputTitle: string;
  inputPlaceholder: string;
  buttonTitle: string;
  submitTextInput: (url: string) => void;
}
// eslint-disable-next-line react/display-name
const LinkInput = React.memo((props: LinkInputProps) => {
  const [inputValue, setInputValue] = useState("");
  console.log("LinkInput");

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputTitle}>{props.linkInputTitle}</Text>
      <TextInput
        style={styles.inputSection}
        placeholder={props.inputPlaceholder}
        defaultValue={inputValue}
        onChangeText={(newValue) => setInputValue(newValue)}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Button
        title={props.buttonTitle}
        onPress={() => props.submitTextInput(inputValue)}
        background="#000"
      />
    </View>
  );
});

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
