import LargeButton from '@/components/LargeButton';
import { useCart } from '@/context/CartContext';
import { BottomTabParamList } from '@/navigation/types';
import { Colors } from '@/theme';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


type Props = BottomTabScreenProps<BottomTabParamList, 'ProductDetail'>;

export default function ProductScreen({ route }: Props) {

    const { selectProduct } = useCart();
    const [quantidade, setQuantidade] = useState<number>(1);

    function valorTotal() {
        return route.params.produto.preco! * quantidade;
    }

    function adcionarProdutos() {


        for (let i = 0; i < quantidade; i++) {
            selectProduct(route.params.produto);
        }
    }

    return (
        <SafeAreaView>
            <Image source={{uri: route.params.produto.imagem_uri}} style={styles.imagem} />
            <View style={styles.conteudo}>
                <Text style={styles.titulo}>{ route.params.produto.nome }</Text>
                <Text style={styles.preco}>R$ { route.params.produto.preco?.toFixed(2) }</Text>
                <Text style={styles.descricao}>{ route.params.produto.descricao }</Text>

                <View style={styles.barraQuantidade}>
                    <Text style={styles.quantidadePergunta}>Escolha a quantidade</Text>
                    <View style={styles.quantidadeSelector}>
                        <TouchableOpacity
                            onPress={()=>{setQuantidade(prev => {
                                if (prev == 0)
                                    return 0;
                                return --prev;
                            })}} style={{...styles.quantidadeCubo, ...styles.quantidadeCuboEsquerda}}>
                            <Text style={{textAlign: 'center'}}>
                                -
                            </Text>
                        </TouchableOpacity>

                        <Text style={styles.quantidadeCubo}>{quantidade}</Text>

                        <TouchableOpacity
                            onPress={()=>{setQuantidade(prev => ++prev)}}
                            style={{...styles.quantidadeCubo, ...styles.quantidadeCuboDireita}}>
                            <Text style={{textAlign: 'center'}}>
                                +
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <LargeButton
                    title={`Adicionar ao carrinho - R$ ${valorTotal().toFixed(2)}`}
                    onPress={adcionarProdutos}/>


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
    barraQuantidade: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    quantidadePergunta: {
        marginVertical: 16,
        fontWeight: 500,
        fontSize: 16
    },
    quantidadeSelector: {
        flexDirection: 'row'
    },
    quantidadeCubo: {
        width: 24,
        height: 24,
        backgroundColor: 'white',
        textAlign: 'center',
        borderBlockColor: '#BBBBBB',
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    quantidadeCuboDireita: {
        // borderWidth: 1,
        borderRightWidth: 1,

        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    },
    quantidadeCuboEsquerda: {
        // borderWidth: 1,
        borderLeftWidth: 1,

        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    }

})