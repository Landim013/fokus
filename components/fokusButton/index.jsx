import { Pressable, StyleSheet, Text } from "react-native";

function FokusButton({ onPress, title, icon, outline }) {
  return (
    <>
      <Pressable
        style={[styles.button, outline && styles.outlineButton]}
        onPress={onPress}
      >
        {icon}
        <Text style={[styles.buttontext, outline && styles.outlineText]}>
          {title}
        </Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#B872FF",
    borderRadius: 32,
    padding: 8,
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttontext: {
    color: "#000",
    textAlign: "center",
    fontSize: 18,
  },
  outlineButton: {
    backgroundColor: "trasparent",
    borderColor: "#B872FF",
    borderWidth: 2,
  },
  outlineText: {
    color: "#B872FF",
  },
});

export default FokusButton;
