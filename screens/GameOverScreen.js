import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  Platform,
} from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  // dynamic image for different device
  // const imageHeight = height < 160 ? 70 : 60;
  // const imageWidth = width < 160 ? 70 : 60;
  // const imageRadius = imageHeight / 2;

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 72;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View
        style={[
          styles.imageContainer,
          // { height: imageHeight },
          // { width: imageWidth },
          // { borderRadius: imageRadius },
          imageStyle,
        ]}
      >
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.higlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.higlight}>{userNumber} </Text>
        number.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth < 300 ? 150 : 300,
    // height: deviceWidth < 300 ? 150 : 300,
    // borderRadius: 120,
    borderWidth: Platform.select({ android: 2, ios: 0 }),
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  higlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
