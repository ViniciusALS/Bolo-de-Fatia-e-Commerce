import { BottomTabParamList } from '@/navigation/types';
import { Colors } from '@/theme';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


type Props = BottomTabScreenProps<BottomTabParamList, 'ProductDetail'>;

export default function ProductScreen({ route }: Props) {

    return (
        <SafeAreaView>
            <Image source={{uri: route.params.produto.imagem_uri}} style={styles.imagem} />
            <View style={styles.conteudo}>
                <Text style={styles.titulo}>{ route.params.produto.nome }</Text>
                <Text style={styles.preco}>{ route.params.produto.preco }</Text>
                <Text style={styles.descricao}>{ route.params.produto.descricao }</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    imagem: {
        width: '100%',
        aspectRatio: 1,
    },
    conteudo: {
        paddingVertical: 32,
        paddingHorizontal: 16,
        backgroundColor: Colors.cremeMuitoClaro,
        gap: 16
    },
    titulo: {
        fontWeight: 500,
        fontSize: 24
    },
    preco: {
        fontWeight: 500,
        fontSize: 16
    },
    descricao: {
        fontWeight: 400,
        fontSize: 16
    },

})