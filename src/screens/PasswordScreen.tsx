import { supabase } from '@/utils/supabase';
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
import { Usuario } from '../types';


type Props = StaticScreenProps<{
  usuario: Usuario;
}>;


export default function PasswordScreen({ route }: Props) {

	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
	const { login } = useUser();

	const [usuario, setUsuario] = useState<Usuario>({
		nome: route.params.usuario.nome,
		sobrenome: route.params.usuario.sobrenome,
		telefone: route.params.usuario.telefone,
		email: route.params.usuario.email,
	});

	const [senha, setSenha] = useState<string>();
	const [senhaRepetida, setSenhaRepetida] = useState<string>();

	function validaCampos() {
		if (!senha)
			return false;

		if (!senhaRepetida)
			return false;

		if (senha !== senhaRepetida)
			return false;

		if (senha.length < 8)
			return false;

		if (senha === senha.toLowerCase())
			return false;

		if (senha === senha.toUpperCase())
			return false;

		if (!/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(senha))
			return false;

		if (!/\d/.test(senha))
			return false;

		return true;
	}

	async function validaEconfiguraUsuario() {

		if (!validaCampos())
			return;

		setUsuario(prev => ({...prev, senha: senha}))

		console.log("Novo Usuario: ");
		console.log(usuario)

		try {
			const {data, error} = await supabase
				.from('usuarios')
				.insert({
					nome: usuario.nome,
					sobrenome: usuario.sobrenome,
					telefone: usuario.telefone,
					email: usuario.email,
					senha: usuario.senha
				})
				.select()
				.single();

				if (error){
					console.log(error)
					return;
				}

				console.log(data);
		}
		catch(error) {
			console.log(error);
			return;
		}
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
					onChange={(value) => setSenha(value)}
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
					onChange={(value) => setSenhaRepetida(value)}
				/>

				<Text>As senhas devem ser iguais</Text>
			</View>

			<LargeButton title={'Continuar'} isAvailable={validaCampos()} onPress={() => {
				validaEconfiguraUsuario();
				login(usuario);
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
