import { StaticScreenProps, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputField from '../components/InputField';
import LargeButton from '../components/LargeButton';
import ReturnButton from '../components/ReturnButton';
import { useUser } from '../context/UserContext';
import { RootStackParamList } from '../navigation/types';
import { Colors } from '../theme';
import { User } from '../types';


type Props = StaticScreenProps<{
  user: User;
}>;


export default function PasswordScreen({ route }: Props) {

	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
	const { login } = useUser();

	const [formData, setFormData] = useState<User>({
		firstName: route.params.user.firstName,
		lastName: route.params.user.lastName,
		email: route.params.user.email,
		telephone: route.params.user.telephone,
	});

	function handleInputChange(field: keyof User, value: string) {
		setFormData(prevData => ({
			...prevData,
			[field]: value,
		}));
	}

	return (
		<View style={styles.safe}>
			<View style={styles.upperSection}>
				<ReturnButton/>
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
					onChange={(value) => handleInputChange('passwordConfirmation', value)}
				/>

				<Text>As senhas devem ser iguais</Text>
			</View>

			<LargeButton title={'Continuar'} onPress={() => {
				login(formData);
				navigation.navigate('Success')
			}} />

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
