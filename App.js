import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

const Home = () => {
  const [ontorchlight, setontorchlight] = useState(false);
  const [switchReverse, setswitchReverse] = useState(false);
  const [back, setBack] = useState(false);

  const TorchBtn = () => {
    setontorchlight(true);
    setswitchReverse(false);
    setBack(true);
  };

  const UndoBtn = () => {
    setswitchReverse(true);
    setontorchlight(false);
    setBack(true);
  };

  const BackBtn = () => {
    setontorchlight(false);
    setswitchReverse(false);
    setBack(false);
  };

  return (
    <View style={styles.heads}>
      <View style={styles.head}>
        <Button
          title="FLASHLIGHT"
          disabled={ontorchlight}
          onPress={TorchBtn}
        />
        <Button
          title="COUNTER"
          disabled={switchReverse}
          onPress={UndoBtn }
        />
      </View>
      <View style={styles.body}>
        {ontorchlight && <FlashLight />}
        {switchReverse && <Counter />}
      </View>
      <View style={styles.btn}>
        {back && <Button title="BACK" onPress={BackBtn} color="blue" />}
      </View>
    </View>
  );
};

const FlashLight = () => {
  const [image, setImage] = useState(false);
  const [text, setText] = useState("ON");

  const toImage = () => {
    setImage(!image);
    setText(text === 'ON' ? 'OFF' : 'ON');
  };

  return (
    <View>
      {image && <Image source={require("./src/design/on.png")} style={styles.image} />}
      {!image && <Image source={require("./src/design/off.png")} style={styles.image} />}
      <Button title={text} onPress={toImage} color="green" />
    </View>
  );
};

const Counter = () => {
  const [number, setNumber] = useState(0);

  return (
    <View style={styles.main}>
      <Text style={styles.number}>{number}</Text>
      <View style={styles.btnmain}>
        <Button
          title="-1"
          color="darkgreen"
          onPress={() => {
            setNumber(number - 1);
          }}
        />
        <Button
          title="+1"
          color="darkgreen"
          onPress={() => {
            setNumber(number + 1);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  head: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  heads: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    fontSize: 100,
    fontWeight: "bold",
    paddingVertical: 20,
  },
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 400,
    paddingVertical: 10,
  },
  btnmain: {
    flexDirection: "row",
    gap: 30,
    paddingVertical: 20,
  },
  btn: {
    width: 100,
    paddingVertical: 20,
  },
  image: {
    width: 150,
    height: 350,
    resizeMode: "stretch",
    marginVertical: 20,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}