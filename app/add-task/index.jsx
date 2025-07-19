import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { IconSave } from "../../components/icons";

function AddTask() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.text}>Adicionar tarefa:</Text>
          <Text style={styles.label}>Em que que você está trabalhando?</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={10}
          ></TextInput>

          <View style={styles.action}>
            <Pressable style={styles.button}>
              <IconSave />
              <Text style={styles.textButton}>Salvar</Text>
            </Pressable>
          </View>
          {/* <FokusButton
            outline={true}
            title="Adicionar nova tarefa"
            icon={<IconPlus />}
          /> */}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
export default AddTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    paddingHorizontal: 24,
    gap: 16,
  },

  text: {
    textAlign: "center",
    color: "#fff",
    fontSize: 26,
  },
  inner: {
    backgroundColor: "#98A0A8",
    padding: 16,
    gap: 32,
    borderRadius: 8,
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    minHeight: 100,
    textAlignVertical: "top",
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  action: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 24,
  },
  textButton: {
    fontWeight: "bold",
  },
});
