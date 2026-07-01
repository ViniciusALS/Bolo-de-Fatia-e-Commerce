import ReturnButton from '@/components/ReturnButton';
import ShoppingCartButton from '@/components/ShoppingCartButton';
import { useCart } from '@/context/CartContext';
import { Colors } from '@/theme';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function CartScreen() {

    const { selectedProducts } = useCart();

    return (
        <View style={styles.safe}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.barraSuperior}>
                    <View style={styles.barraEsquerda}>
                        <ReturnButton/>
                        <Text style={styles.titulo}>Finalizar compra</Text>
                    </View>

                    <ShoppingCartButton fill={Colors.preto}/>
                </View>

                <Text>Items do pedido:</Text>

                {
                    selectedProducts?.map(p => (
                        <Text key={p.id}>{p.nome}</Text>
                    ))
                }

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        padding: 24,
        backgroundColor: Colors.cremeClaro,
    },
    barraSuperior: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 32
    },
    barraEsquerda: {
        flexDirection: 'row',
        gap: 16,
        alignItems: 'center'
    },
    titulo: {
        fontSize: 24
    }
});