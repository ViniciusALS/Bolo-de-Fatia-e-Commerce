import ProductCard from '@/components/ProductCard';
import { Product } from '@/types';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import RoundedButton from '../components/RoundedButtons';
import ShoppingCartButton from '../components/ShoppingCartButton';
import { useUser } from '../context/UserContext';
import { Colors } from '../theme';


const listaDeProdutos:Product[] = [
    {
        id: 1,
        name: "Bolo de Floresta Negra",
        price: 59.99,
        imagePath: "'../../assets/images/bolo-floresta-negra.png'",
        isFavorite: true,
    },
    {
        id: 2,
        name: "Bolo de Laranja",
        price: 45.99,
        imagePath: "../../assets/images/bolo-floresta-negra.png",
        isFavorite: true,
    },
    {
        id: 3,
        name: "Bolo de Chocolate",
        price: 69.99,
        imagePath: "../../assets/images/bolo-floresta-negra.png",
        isFavorite: true,
    },
    {
        id: 4,
        name: "Bolo de Morango",
        price: 79.99,
        imagePath: "../../assets/images/bolo-floresta-negra.png",
        isFavorite: true,
    },
    {
        id: 5,
        name: "Bolo Formigueiro",
        price: 37.99,
        imagePath: "../../assets/images/bolo-floresta-negra.png",
        isFavorite: true,
    },
    {
        id: 6,
        name: "Bolo de Maracuja",
        price: 49.99,
        imagePath: "../../assets/images/bolo-floresta-negra.png",
        isFavorite: true,
    },
];

export default function HomeScreen() {

    const { user } = useUser();

    return (
        <View style={style.safe}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={style.header}>
                    <View style={style.sectionTopBar}>
                        <Text style={style.greeting}>Olá, {user!.firstName}!</Text>
                        <ShoppingCartButton/>
                    </View>
                    <Text style={style.description}>O que vai adoçar o seu dia hoje?</Text>
                </View>

                <View style={style.sectionTopBar}>
                    <Text style={style.sectionTitle}>Categorias</Text>
                    <RoundedButton name="Ver todos"  onPress={()=>console.log("Bolos pressionado")}/>
                </View>
                <View style={style.sectionTopBar}>
                    <Text style={style.sectionTitle}>Mais vendidos</Text>
                    <RoundedButton name="Ver todos"  onPress={()=>console.log("Bolos pressionado")}/>
                </View>

                {listaDeProdutos.map((produto) => (
                    <ProductCard key={produto.id} product={produto} />
                ))}
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    safe: {
        flex: 1,
        padding: 24,
        backgroundColor: Colors.cremeClaro,
    },
    header: {
        gap: 8,
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'medium',
        color: Colors.quasePreto,
    },
    description: {
        fontSize: 16,
        color: Colors.quasePreto,
    },
    sectionTopBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'medium',
        color: Colors.quasePreto,
    },
});