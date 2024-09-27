import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import type products from "@/assets/data/products";

const ProductList = ({ product }: { product: (typeof products)[0] }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 10,
  },
  price: {
    fontWeight: "bold",
    color: Colors.light.tint,
  },
  image: {
    aspectRatio: 1,
    width: "100%",
  },
});
