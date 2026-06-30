import { supabase } from '@/utils/supabase';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputField from '../components/InputField';
import LargeButton from '../components/LargeButton';
import ReturnButton from '../components/ReturnButton';
import { RootStackParamList } from '../navigation/types';
import { Colors } from '../theme';
import { Usuario } from '../types';


export default function RegisterScreen() {

	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

	const [nome, setNome] = useState<string>('');
	const [sobrenome, setSobrenome] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [telefone, setTelefone] = useState<string>('');

	function validaCampos() {
		if(!nome)
			return false;

		if (!sobrenome)
			return false;

		if (!email)
			return false;

		const validateEmail = (email:string) => {
			return email.match(
				/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
		};

		if (!validateEmail(email))
			return false;

		const validaTelefone = (telefone:string) => {
			return telefone.match(
				/^\(\d{2}\)\d{4,5}-?\d{4}$/
			);
		};

		if (!validaTelefone(telefone))
			return false;

		return true;
	}

	async function checkAndSetUsuario() {
		if (!validaCampos()){
			console.log("Campos invalidos");
			return;
		}

		try {
			const {data, error} = await supabase.from("usuarios").select().eq("email", email);

			if (data?.length !== 0 || error){
				console.log("Mensagem de erro " + error);
				console.log("Data: " + data);
				return;
			}
		}
		catch (error) {
			console.log("Erro encontrado");
			return;
		}

		const novoUsuario: Usuario = {
			nome: nome,
			sobrenome: sobrenome,
			email: email,
			telefone: telefone,
		};

		navigation.navigate('Password', { usuario: novoUsuario });
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
					onChange={(value) => setNome(value)}
				/>

				<InputField
					label="Sobrenome completo"
					placeholder="Ex.: Costas"
					onChange={(value) => setSobrenome(value)}
				/>

				<InputField
					label="E-mail"
					placeholder="Ex.: joao@example.com"
					onChange={(value) => setEmail(value)}
				/>

				<InputField
					label="Telefone"
					placeholder="Ex.: (99) 99999-9999"
					onChange={(value) => setTelefone(value)}
				/>
			</View>

			<LargeButton title={'Continuar'} isAvailable={validaCampos()} onPress={() => checkAndSetUsuario()} />

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
