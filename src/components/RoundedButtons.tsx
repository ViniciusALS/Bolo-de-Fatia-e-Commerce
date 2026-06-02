import { Colors } from "@/theme";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// ─── Primary Button ────────────────────────────────────────────────────────────
interface props {
  name: string;
  onPress: () => void;
}

export default function RoundedButton({ name, onPress}: props) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btnBase}>
            <Text style={styles.txtBase}>
                {name}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnBase: {
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: Colors.primaria,
    },
    txtBase: {
        fontSize: 14,
        color: Colors.branco
    },
});