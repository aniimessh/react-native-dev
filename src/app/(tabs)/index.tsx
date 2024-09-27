import products from "@/assets/data/products";
import ProductList from "@/src/components/ProductListItem";
import { View } from "react-native";

export default function TabOneScreen() {
  return (
    <View>
      <ProductList product={products[0]} />
      <ProductList product={products[1]} />
    </View>
  );
}
