import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void;
  background: string;
};

// eslint-disable-next-line react/display-name
const Button = React.memo((props: ButtonProps) => {
  console.log("Button", props.title);
  return (
    <Pressable
      style={[styles.button, { backgroundColor: props.background }]}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
});

export default Button;

const styles = StyleSheet.create({
  button: {
    marginTop: 18,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.3,
    color: "white",
  },
});
