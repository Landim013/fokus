import { router } from "expo-router";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import FokusButton from "../components/fokusButton";
const screenWidth = Dimensions.get("window").width;

function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logoFokus.png")} />
      <View style={styles.contendtTitle}>
        <Text style={styles.title}>
          Otimize sua{"\n"}produtividade,{"\n"}
          <Text style={styles.titleBold}>mergulhe no que{"\n"}importa</Text>
        </Text>
      </View>
      <View style={styles.contentPrincipal}>
        <Image
          style={styles.imgInitial}
          source={require("../assets/images/ImagemInicial.png")}
        />
        <FokusButton
          title="Quero iniciar!"
          onPress={() => router.navigate("/pomodoro")}
        />
      </View>
      <Text style={styles.textFooter}>
        Projeto fictício e sem fins comerciais.{"\n"}Desenvolvido por Alura.
      </Text>

      {/* <Link href={{ pathname: "/pomodoro" }}>Quero iniciar!</Link> */}
    </View>
  );
}
export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  imgInitial: {
    width: screenWidth * 0.8,
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
    alignSelf: "center",
  },
  contendtTitle: {
    gap: 16,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  contentPrincipal: {
    marginTop: -40,
  },
  title: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
  },
  titleBold: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  textFooter: {
    color: "#98A0A8",
    fontSize: 14,
    textAlign: "center",
    marginTop: 40,
    paddingHorizontal: 20,
  },
});
