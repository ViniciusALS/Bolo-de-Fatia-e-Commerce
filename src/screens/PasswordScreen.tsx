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
	firstName?: string;
	lastName?: string;
	email?: string;
	phone?: string;
	password?: string;
	confirmPassword?: string;
}


export default function PasswordScreen() {

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
				<ReturnButton onPress={() => navigation.goBack()} />
				<Text style={styles.titulo}>Criar senha</Text>
				<Text style={styles.subtitulo}>Sua senha deve ter pelo menos 8 caracteres</Text>
			</View>

			<View style={styles.form}>
				<InputField
					label="Senha"
					placeholder="Ex.: 12345678"
					secureTextEntry
					onChange={(value) => handleInputChange('password', value)}
				/>

				<View>
					<Text>A senha deve conter:</Text>
					<Text>Pelo menos 8 caracteres</Text>
					<Text>Pelo menos uma letra minuscula</Text>
					<Text>Pelo menos uma letra maiuscula</Text>
					<Text>Pelo menos um número</Text>
					<Text>Pelo menos um caractere especial</Text>
				</View>

				<InputField
					label="Confirmar senha"
					placeholder="Ex.: 12345678"
					secureTextEntry
					onChange={(value) => handleInputChange('confirmPassword', value)}
				/>

				<Text>As senhas devem ser iguais</Text>
			</View>

			<LargeButton title={'Continuar'} onPress={() => navigation.navigate('Success')} />

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
	form: {
		gap: 16,
	}
});
