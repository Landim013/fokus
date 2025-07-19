import { useRef, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ActionButton from "../components/actionButton";
import FokusButton from "../components/fokusButton";
import { IconPause, IconPlay } from "../components/icons";
import Timer from "../components/timer";

const pomodoro = [
  {
    id: "focus",
    initialValue: 25 * 60,
    image: require("../assets/images/pomodoro.png"),
    display: "Foco",
  },
  {
    id: "short",
    initialValue: 5 * 60,
    image: require("../assets/images/short.png"),
    display: "Pausa curta",
  },
  {
    id: "long",
    initialValue: 15 * 60,
    image: require("../assets/images/long.png"),
    display: "Pausa longa",
  },
];

export default function Pomodoro() {
  const [timerType, setTimerType] = useState(pomodoro[0]);
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue);

  const [timerRunning, setTimerRunning] = useState(false);

  const timerRef = useRef(null);

  function clearTimer() {
    if (timerRef.current != null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimerRunning(false);
    }
  }

  function togleTimmerType(newTimerType) {
    setTimerType(newTimerType);
    setSeconds(newTimerType.initialValue);
    clearTimer();
  }
  function togleTimer() {
    if (timerRef.current) {
      clearTimer();
      return;
    }
    setTimerRunning(!timerRunning);
    const id = setInterval(() => {
      setSeconds((oldState) => {
        if (oldState === 0) {
          clearTimer();
          return timerType.initialValue;
        }
        return oldState - 1;
      });
    }, 1000);
    timerRef.current = id;
  }

  return (
    <View style={styles.container}>
      <Image source={timerType.image} />
      <View style={styles.actions}>
        <View style={styles.content}>
          {pomodoro.map((item) => (
            <ActionButton
              key={item.id}
              active={timerType.id === item.id}
              onPress={() => togleTimmerType(item)}
              display={item.display}
            />
          ))}
        </View>
        <Timer seconds={seconds} />
        <FokusButton
          onPress={togleTimer}
          title={timerRunning ? "Pausar " : "Começar"}
          icon={timerRunning ? <IconPause /> : <IconPlay />}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>Desenvolvido por Alura. </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  text: {
    color: "#fff",
  },
  actions: {
    width: "80%",
    borderWidth: 2,
    borderRadius: 32,
    borderColor: "#144480",
    padding: 24,
    gap: 32,
    backgroundColor: "#14448080",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  footer: {
    width: "80%",
  },
  footerText: {
    color: "#98A0A8",
    textAlign: "center",
    fontSize: 12.5,
  },
});
