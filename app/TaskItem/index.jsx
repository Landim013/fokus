import { Pressable, StyleSheet, Text, View } from "react-native";
import { IconCheck, IconPencil, IconTrash } from "../../components/icons";

function TaskItem({
  completed,
  text,
  onToggleComplete,
  onPressEdit,
  onPressDelete,
}) {
  return (
    <View
      style={[
        styles.card,
        { backgroundColor: completed ? "#0F725C" : "#98a0a8" },
      ]}
    >
      <Pressable onPress={onToggleComplete}>
        <IconCheck checked={completed} />
      </Pressable>
      <Text style={styles.text}>{text}</Text>
      <Pressable onPress={onPressEdit}>
        <IconPencil />
      </Pressable>
      <Pressable onPress={onPressDelete}>
        <IconTrash />
      </Pressable>
    </View>
  );
}

export default TaskItem;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 18,
    borderRadius: 8,
    gap: 8,
  },
  text: {
    flex: 1,
    color: "#021123",
    fontSize: 18,
    fontWeight: "bold",
  },
});
