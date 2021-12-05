import React from "react";
import { StyleSheet } from "react-native";

import ToastMessagesDemo from "../components/ToastMessagesDemo";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation
}: RootTabScreenProps<"TabOne">) {
  /*
    ToastMessagesDemo` component has a Modal with a Toast instance inside.
    This creates a nesting level of 1:
    Root level --> Modal level
        0              1
  */

  return <ToastMessagesDemo toastNestingLevel={1} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%"
  }
});
