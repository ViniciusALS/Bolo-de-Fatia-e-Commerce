import { BottomTabParamList } from "@/navigation/types";
import { Colors } from "@/theme";
import { Produto } from "@/types";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
    produto: Produto;
}

export default function ProductCard({ produto }: Props) {

    const navigation = useNavigation<BottomTabNavigationProp<BottomTabParamList>>();

    return (
        <TouchableOpacity
            style={styles.card}
            onPress={()=>navigation.navigate("ProductDetail", { produto: produto })}
        >

            <Image source={{uri: produto.imagem_uri}} style={styles.image} alt={produto.nome} />
            <View style={styles.textos}>
                <Text style={styles.titulo}>{produto.nome}</Text>
                <Text style={styles.preco}>${produto.preco!.toFixed(2)}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: "48%",
        flexDirection: "column",
        gap: 10,
        borderColor: "black",
        borderWidth: 0,
        backgroundColor: Colors.cremeClaro,
        borderRadius: 16,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    image: {
        width: "100%",
        aspectRatio: 1,
        borderTopEndRadius: 16,
        borderTopStartRadius: 16,
    },
    textos: {
        padding: 4,
        gap: 4
    },
    titulo: {
        fontSize: 14,
        fontWeight: 600
    },
    preco: {
        fontSize: 12
    }

});