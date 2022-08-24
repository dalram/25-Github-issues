import React, { FC } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  background?: string;
  textColor?: string;
}

// eslint-disable-next-line react/display-name
const Button = React.memo((props: ButtonProps) => {
  console.log("Button", props.title);
  return (
    <Pressable style={styles(props).button} onPress={props.onPress}>
      <Text style={styles(props).text}>{props.title}</Text>
    </Pressable>
  );
});

export default Button;

const styles = (props?: any) =>
  StyleSheet.create({
    button: {
      marginTop: 18,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 12,
      paddingHorizontal: 22,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: props.background ? props.background : "#000",
    },
    text: {
      fontSize: 14,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.3,
      color: "white",
    },
  });
