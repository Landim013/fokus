import { Pressable, StyleSheet, Text } from "react-native";

function ActionButton({ active, onPress, display }) {
  return (
    <>
      <Pressable style={active ? styles.contentButton : null} onPress={onPress}>
        <Text style={styles.contentText}>{display}</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  contentButton: {
    backgroundColor: "#144480",
    borderRadius: 8,
  },

  outlineText: {},
  contentText: {
    color: "#fff",
    padding: 8,
    fontSize: 12.5,
    fontWeight: 400,
  },
});

export default ActionButton;
