import React, { FC } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { logRender } from "utils/logRender";

type ButtonProps = {
  title: string;
  onPress: () => void;
  background: string;
};
const Button: FC<ButtonProps> = (props) => {
  logRender(`Button ${props.title}`);
  return (
    <Pressable
      style={[styles.button, { backgroundColor: props.background }]}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

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
