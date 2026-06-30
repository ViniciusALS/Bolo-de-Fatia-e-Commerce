import { Produto } from "@/types";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
    product: Produto;
}

export default function ProductCard({ product }: Props) {

    return (
        <View style={styles.card}>
            <Image source={require('../../assets/images/bolo-floresta-negra.png')} alt={product.nome} />
            <Text style={styles.titulo}>{product.nome}</Text>
            <Text>${product.price.toFixed(2)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: "column",
        gap: 10,
        borderColor: "black",
        borderWidth: 1,
        // backgroundColor: Colors.cremeMuitoClaro,
        // backgroundColor: "red"
    },
    titulo: {
        fontSize: 16,
        flex: 1,
        backgroundColor: "red"

    }

});