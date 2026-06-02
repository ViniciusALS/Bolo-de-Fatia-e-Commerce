import InputField from '@/components/InputField';
import LargeButton from '@/components/LargeButton';
import ReturnButton from '@/components/ReturnButton';
import { RootStackParamList } from '@/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../theme';
// import { RootStackParamList } from '../navigation/types';
// import { Button } from '../components/UI';
// import { BorderRadius, Colors, FontSize, Spacing } from '../theme';

// type Props = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'Landing'>;
// };

interface FormData {
	firstName?: string;
	lastName?: string;
	email?: string;
	phone?: string;
	password?: string;
	confirmPassword?: string;
}


export default function RegisterScreen() {

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
				<ReturnButton/>
				<Text style={styles.titulo}>Dados pessoais</Text>
				<Text style={styles.subtitulo}>Informe seus dados para{'\n'}criar uma conta</Text>
			</View>

			<View style={styles.form}>
				<InputField
					label="Primeiro nome"
					placeholder="Ex.: João"
					onChange={(value) => handleInputChange('firstName', value)}
				/>

				<InputField
					label="Sobrenome completo"
					placeholder="Ex.: Costas"
					onChange={(value) => handleInputChange('lastName', value)}
				/>

				<InputField
					label="E-mail"
					placeholder="Ex.: joao@example.com"
					onChange={(value) => handleInputChange('email', value)}
				/>

				<InputField
					label="Telefone"
					placeholder="Ex.: (99) 99999-9999"
					onChange={(value) => handleInputChange('phone', value)}
				/>
			</View>

			<LargeButton title={'Continuar'} onPress={() => navigation.navigate('Password')} />

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
