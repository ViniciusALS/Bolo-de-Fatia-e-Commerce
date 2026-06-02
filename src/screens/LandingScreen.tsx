import { AwardSvg, BirthdayCakeSvg, BoloSvg, ComunitySvg, CupcakeSvg, HeartSvg, LockSvg, PresentSvg, TruckSvg } from '@/assets/icons';
import LargeButton from '@/components/LargeButton';
import { RootStackParamList } from '@/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../theme';
// import { Button } from '../components/UI';
// import { BorderRadius, Colors, FontSize, Spacing } from '../theme';


export default function LandingScreen() {

	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

	return (
		<SafeAreaView style={styles.safe}>
				{/* Hero */}
				<ImageBackground style={styles.hero} source={require('../../assets/images/bolo_background.png')} resizeMode="cover">
					<BoloSvg/>
					<Text style={styles.heroTitle}>Bolos feitos{'\n'}para cada{'\n'}momento</Text>
					<View style={styles.divider} />
					<Text style={styles.heroSubtitle}>
						Descubra sabores incríveis,{'\n'}feitos com ingredientes{'\n'}selecionados e muito amor
					</Text>
				</ImageBackground>

				{/* Feature Pills */}
				<View style={styles.featuresCard}>
					<View style={styles.featureItem}>
						<AwardSvg/>
						<Text style={styles.featureLabel}>Ingredientes{'\n'}selecionados</Text>
					</View>

					<View style={styles.featureItem}>
						<HeartSvg/>
						<Text style={styles.featureLabel}>Feito{'\n'}com amor</Text>
					</View>

					<View style={styles.featureItem}>
						<TruckSvg/>
						<Text style={styles.featureLabel}>Entrega{'\n'}rápida</Text>
					</View>

					<View style={styles.featureItem}>
						<LockSvg/>
						<Text style={styles.featureLabel}>Compra 100%{'\n'}segura</Text>
					</View>
				</View>

				{/* Occasions */}
				<Text style={styles.occasionsTitle}>Encontre o bolo perfeito para</Text>
				<View style={styles.occasions}>
					<View style={styles.featureItem}>
						<BirthdayCakeSvg/>
						<Text style={styles.featureLabel}>Aniversários</Text>
					</View>

					<View style={styles.featureItem}>
						<CupcakeSvg/>
						<Text style={styles.featureLabel}>Datas especiais</Text>
					</View>

					<View style={styles.featureItem}>
						<PresentSvg/>
						<Text style={styles.featureLabel}>Presentes</Text>
					</View>

					<View style={styles.featureItem}>
						<ComunitySvg/>
						<Text style={styles.featureLabel}>E muito mais</Text>
					</View>
				</View>


				{/* CTAs */}
				<View style={styles.actions}>
					<LargeButton
						title="Criar conta"
						onPress={() => navigation.navigate('Register')} />

					<LargeButton
						title="Entrar"
						variant="outline"
						onPress={() => navigation.navigate('Login') } />

					<Text style={styles.terms}>
						Ao continuar, você concorda com nossos{'\n'}
						<Text style={styles.termsLink}>Termos de uso</Text>
						{' '}e{' '}
						<Text style={styles.termsLink}>Política de privacidade</Text>
					</Text>
				</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safe: {
		flex: 1,
		backgroundColor: Colors.cremeClaro,
	},
	hero: {
		gap: 24,
		padding: 24,
		height: 480,
	},
  	heroIcon: {
		fontSize: 40
	},
  	heroTitle: {
		fontSize: 32,
		fontWeight: '800',
		color: Colors.quasePreto,
		lineHeight: 42
  	},
	divider: {
		width: 30,
		height: 3,
		backgroundColor: Colors.quasePreto,
		borderRadius: 2,
		marginBottom: 16,
	},
  	heroSubtitle: {
    	fontSize: 13,
    	color: Colors.quasePreto,
    	lineHeight: 24,
  	},

  	featuresCard: {
 	   flexDirection: 'row',
    	justifyContent: 'space-around',
    	backgroundColor: Colors.branco,
    	borderRadius: 16,
		height: 72,
		alignItems: 'center',
		top: -36,
    	marginHorizontal: 24,
  	},
  	featureItem: {
		alignItems: 'center',
		textAlign: 'center',
		gap: 4,
	},
  	featureLabel: {
    	fontSize: 9,
    	color: Colors.quasePreto,
    	textAlign: 'center',
  	},

  	occasionsTitle: {
		top: -24,
    	fontSize: 10,
    	fontWeight: '600',
    	color: Colors.quasePreto,
	    textAlign: 'center',
    	marginBottom: 24,
  	},
  	occasions: {
		top: -24,
 	   	flexDirection: 'row',
    	justifyContent: 'space-around',
    	marginHorizontal: 24,
  	},
//   occasionItem: { alignItems: 'center' },
//   occasionEmoji: { fontSize: 24, marginBottom: 4 },
//   occasionLabel: {
//     fontSize: FontSize.xs,
//     color: Colors.textSecondary,
//     textAlign: 'center',
//     maxWidth: 72,
//   },

  	actions: {
		marginTop: "auto",
		paddingHorizontal: 24,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 8,
	},
  	terms: {
		textAlign: 'center',
		fontSize: 10,
		color: Colors.quasePreto,
  	},
  	termsLink: {
		textDecorationLine: 'underline',
		color: Colors.preto,
		fontWeight: '600',
		lineHeight: 16,
	},
});
