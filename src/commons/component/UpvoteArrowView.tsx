import { View, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

type Props = {
  size: number;
  color?: string;
  padding?: number;
};

export const UpvoteArrowView = (props: Props) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: props.color || "white",
          padding: props.padding || 1,
        },
      ]}
    >
      <Ionicons name="arrow-up" size={props.size} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 50, // round
  },
});
