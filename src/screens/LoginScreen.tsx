import { BoloSvg2 } from '@/assets/icons';
import InputField from '@/components/InputField';
import LargeButton from '@/components/LargeButton';
import ReturnButton from '@/components/ReturnButton';
import { RootStackParamList } from '@/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../theme';

interface FormData {
	email?: string;
	password?: string;
}

export default function LoginScreen() {

	const [formData, setFormData] = useState({})

	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

	function handleInputChange(field: keyof FormData, value: string) {
		setFormData(prevData => ({
			...prevData,
			[field]: value,
		}));
	}

	return (
		<View style={styles.safe}>
			<View style={styles.upperSection}>
				<ReturnButton />
				<Text style={styles.titulo}>Entrar</Text>
				<Text style={styles.subtitulo}>Seja bem vindo de volta</Text>
			</View>

			<View style={styles.centerImage} >
				<BoloSvg2 color={Colors.branco}/>
			</View>

			<View style={styles.form}>
				<InputField
					label="Email"
					placeholder=""
					onChange={(value) => handleInputChange('email', value)}
				/>

				<InputField
					label="Senha"
					placeholder=""
					secureTextEntry
					onChange={(value) => handleInputChange('password', value)}
				/>
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
		fontSize: 36,
		color: Colors.quasePreto,
	},
	subtitulo: {
		fontSize: 20,
		color: Colors.quasePreto,
	},
	upperSection: {
		gap: 16
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
