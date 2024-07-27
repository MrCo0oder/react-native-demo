import { StyleSheet, Text, View } from "react-native";

const MainLayout = () => {
  return (
    <View style={styles.container}>
      <Text>RootLayout</Text>
    </View>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
