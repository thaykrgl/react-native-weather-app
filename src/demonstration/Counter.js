import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, SafeAreaView } from "react-native";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed`);
  }, [count]);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>{`Count: ${count}`}</Text>
        <Button
          color={"red"}
          title={"Increase the count"}
          onPress={() => setCount(count + 1)}
        />
        <Button
          color={"green"}
          title={"Decrease the count"}
          onPress={() => setCount(count - 1)}
        />
        <Button
          color={"red"}
          title={"Increase the count"}
          onPress={() => setNewCount(count + 1)}
        />
        <Button
          color={"green"}
          title={"Decrease the count"}
          onPress={() => setNewCount(count - 1)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  title: {
    alignSelf: "center",
    fontSize: 25,
    marginTop: 25,
  },
});

export default Counter;
