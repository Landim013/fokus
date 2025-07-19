import { router } from "expo-router";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import FokusButton from "../../components/fokusButton";
import { IconPlus } from "../../components/icons";
import TaskItem from "../TaskItem";

function Tasks() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Lista de tarefas:</Text>
        <View style={styles.inner}>
          <TaskItem completed={true} text="Tarefa Estudar React Native" />
          <TaskItem completed={false} text="Estudar React" />
        </View>
        <FokusButton
          outline={true}
          title="Adicionar nova tarefa"
          icon={<IconPlus />}
          onPress={() => router.navigate("/add-task")}
        />
      </View>
    </SafeAreaView>
  );
}
export default Tasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#021123",
  },
  wrapper: {
    gap: 40,
    width: "90%",
  },
  text: {
    textAlign: "center",
    color: "#fff",
    fontSize: 26,
  },
  inner: {
    gap: 8,
  },
});
