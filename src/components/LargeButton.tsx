import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "../theme";

// ─── Primary Button ────────────────────────────────────────────────────────────
interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'outline';
  style?: object;
}

export default function LargeButton({ title, onPress, variant = 'primary', style }: ButtonProps) {

	const isPrimary = variant === 'primary';

	return (
		<TouchableOpacity
			onPress={onPress}
			style={[
				styles.btnBase,
				isPrimary ? styles.btnPrimary : styles.btnOutline,
				style,
			]}
		>
			<Text
				style={[
					styles.txtBase,
					isPrimary ? styles.txtPrimary : styles.txtOutline,
					style,
				]}
			>
				{title}
			</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	btnBase: {
		fontSize: 16,
		paddingVertical: 16,
		fontWeight: '600',
		borderRadius: 8,
		width: '100%',
		alignItems: 'center',
	},
	btnPrimary: {
		backgroundColor: Colors.primaria,
	},
	btnOutline: {
		borderWidth: 1,
		borderColor: Colors.primaria,
	},
	txtBase: {
		fontSize: 16,
		fontWeight: '600'
	},
	txtPrimary: {
		color: Colors.branco,
	},
	txtOutline: {
		color: Colors.quasePreto
	},
});