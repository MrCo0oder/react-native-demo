import FontAwesome from "@expo/vector-icons/build/FontAwesome";
import { router } from "expo-router";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

const SettingsPage = () => {
  return (
    <View style={styles.box}>
      <View style={styles.body}>
        <Text>Hi</Text>
      </View>
      <View
        style={[styles.buttonContainer,{
          paddingBottom: 24,
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#A1A3F6" }]}
          onPress={() => router.back()}
        >
          <FontAwesome
            name="arrow-left"
            size={18}
            color="#fff"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#fff" }]}>{"Back"}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SettingsPage;

const styles = StyleSheet.create({
  box: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
