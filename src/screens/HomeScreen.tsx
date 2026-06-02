import RoundedButton from '@/components/RoundedButtons';
import ShoppingCartButton from '@/components/ShoppingCartButton';
import { Colors } from '@/theme';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const userData = {
    "firstName": "John"
};

const mostSold = [
    {
        id: 1,
        name: "Bolo de Floresta Negra",
        price: 59.99,
        image: "https://example.com/bolo-floresta-negra.jpg"
    },
    {
        id: 2,
        name: "Bolo de Laranja",
        price: 59.99,
        image: "https://example.com/bolo-laranja.jpg"
    },
    {
        id: 3,
        name: "Bolo de Chocolate",
        price: 59.99,
        image: "https://example.com/bolo-chocolate.jpg"
    }
];

export default function HomeScreen() {



    return (
        <SafeAreaView style={style.safe}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={style.header}>
                    <View style={style.sectionTopBar}>
                        <Text style={style.greeting}>Olá, {userData.firstName}!</Text>
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
            </ScrollView>
        </SafeAreaView>
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