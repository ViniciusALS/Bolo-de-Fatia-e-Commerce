import { BoloSvg2 } from '@/assets/icons';
import InputField from '@/components/InputField';
import LargeButton from '@/components/LargeButton';
import ReturnButton from '@/components/ReturnButton';
import { RootStackParamList } from '@/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../theme';


export default function LoginScreen() {

	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

	return (
		<View style={styles.safe}>
			<View style={styles.upperSection}>
				<ReturnButton onPress={() => navigation.goBack()} />
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
					onChange={(value) => handleInputChange('password', value)}
				/>

				<InputField
					label="Senha"
					placeholder=""
					secureTextEntry
					onChange={(value) => handleInputChange('confirmPassword', value)}
				/>
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
