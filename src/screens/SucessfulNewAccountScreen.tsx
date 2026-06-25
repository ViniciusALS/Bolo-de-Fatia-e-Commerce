import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BoloSvg2 } from '../../assets/icons';
import LargeButton from '../components/LargeButton';
import { RootStackParamList } from '../navigation/types';
import { Colors } from '../theme';

interface FormData {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    password?: string;
    confirmPassword?: string;
}


export default function SucessfulNewAccountScreen() {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const [formData, setFormData] = useState<FormData>({});

    function handleInputChange(field: keyof FormData, value: string) {
        setFormData(prevData => ({
            ...prevData,
            [field]: value,
        }));
    }

    return (
        <View style={styles.safe}>
            <View style={styles.upperSection}>
                <View style={styles.centerImage} >
                    <BoloSvg2 color={Colors.branco}/>
                </View>
                <Text style={styles.titulo}>Conta criada com sucesso!!!</Text>
                <Text style={styles.subtitulo}>Agora você faz parte da{'\n'}nossa confeitaria</Text>
            </View>

            <LargeButton title={'Continuar'} onPress={() => navigation.navigate('MainTabs')} />

        </View>
    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        padding: 24,
        backgroundColor: Colors.cremeClaro,
        justifyContent: 'space-between',
    },
    titulo: {
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center',
        color: Colors.quasePreto,
    },
    subtitulo: {
        fontSize: 20,
        textAlign: 'center',
        color: Colors.quasePreto,
    },
    upperSection: {
        gap: 24,
        flex: 1,
        justifyContent: 'center',
    },
    centerImage: {
        width: 150,
        height: 150,
        backgroundColor: Colors.primaria,
        borderRadius: 100,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: Colors.branco,
    },
    form: {
        gap: 16,
    }
});
