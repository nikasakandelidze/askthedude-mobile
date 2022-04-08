import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { UpvoteArrowView } from "./UpvoteArrowView";

const UpvotesView = ({ upvotes }: { upvotes: number }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginRight: 5 }}>
        <UpvoteArrowView size={15} />
      </View>
      <Text style={styles.likesContainer}>{upvotes}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  likesContainer: {
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
});

export default UpvotesView;
