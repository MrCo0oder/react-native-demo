import { Link, router } from "expo-router";
import { Image, Platform, Text, View, StyleSheet, Button, Pressable } from "react-native";
const image = {
  uri: "https://docs.expo.dev/static/images/tutorial/background-image.png",
};

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={image} style={styles.box} />
      <Pressable onPress={()=>router.push('settings')}>
      <Text>Hello Honey ❤️</Text>
      </Pressable>
      <Link href={'settings'}>
      <Text>Hello Honey ❤️</Text>
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    width: 320,
    height: 430,
    borderRadius: 18,
    marginBottom: 30,
    paddingBottom:10,
    
    ...Platform.select({
      ios: {
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        backgroundColor: "white",
        paddingVertical: 45,
        paddingHorizontal: 25,
        marginVertical: 10,
        elevation: 20,
        shadowColor: "#52006A",
      }
    }),
  },
});
