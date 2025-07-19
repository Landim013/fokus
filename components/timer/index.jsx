import { StyleSheet, Text } from "react-native";

function Timer({ seconds }) {
  const date = new Date(seconds * 1000);
  const options = { minute: "2-digit", second: "2-digit" };
  return (
    <Text style={styles.timer}>
      {date.toLocaleTimeString("pt-BR", options)}
    </Text>
  );
}

const styles = StyleSheet.create({
  timer: {
    fontSize: 54,
    color: "#FFF",
    fontWeight: 600,
    textAlign: "center",
  },
});
export default Timer;
