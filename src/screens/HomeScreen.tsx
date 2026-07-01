import ProductCard from '@/components/ProductCard';
import { Produto } from '@/types';
import { supabase } from '@/utils/supabase';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ShoppingCartButton from '../components/ShoppingCartButton';
import { useUser } from '../context/UserContext';
import { Colors } from '../theme';

export default function HomeScreen() {

    const { usuario } = useUser();

    const [bolos, setBolos] = useState<Produto[]>([]);

    useEffect(() => {
        const getBolos = async () => {
            try {
                const { data, error } = await supabase.from('produto')
                    .select(`
                        id,
                        created_at,
                        nome,
                        descricao,
                        preco,
                        imagem_uri,
                        favorito(id)
                    `);

                if (error) {
                    console.error('Error fetching todos:', error.message);
                    return;
                }

                if (data && data.length > 0) {

                    setBolos(data.map(e => ({
                        id: e.id,
                        created_at: e.created_at,
                        nome: e.nome,
                        descricao: e.descricao,
                        preco: e.preco,
                        imagem_uri: e.imagem_uri,
                        favorito: e.favorito.length > 0 ? true : false
                    })));

                    console.log(bolos);
                }
            } catch (error) {
                console.error('Error fetching todos: ', error);
            }
        }

        getBolos();
    }, []);

    return (
        <View style={style.safe}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={style.header}>
                    <View style={style.sectionTopBar}>
                        <Text style={style.greeting}>Olá, {usuario!.nome}!</Text>
                        <ShoppingCartButton/>
                    </View>
                    <Text style={style.description}>O que vai adoçar o seu dia hoje?</Text>
                </View>

                {/* <View style={style.sectionTopBar}>
                    <Text style={style.sectionTitle}>Categorias</Text>
                    <RoundedButton name="Ver todos"  onPress={()=>console.log("Bolos pressionado")}/>
                </View>
                <View style={style.sectionTopBar}>
                    <Text style={style.sectionTitle}>Mais vendidos</Text>
                    <RoundedButton name="Ver todos"  onPress={()=>console.log("Bolos pressionado")}/>
                </View> */}

                <View style={style.grid}>
                    {bolos.map((produto) => (
                        <ProductCard key={produto.id} produto={produto} />
                    ))}
                </View>
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
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        rowGap: 16,
        marginTop: 16,
    },
});