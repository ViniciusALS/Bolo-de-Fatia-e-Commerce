import { Colors } from "@/theme";
import { StyleSheet, Text, TextInput, View } from "react-native";

type props = {
    label: string,
    placeholder: string,
    onChange: (value: string) => void,
}

export default function InputField({ label, placeholder, onChange }: props) {
    return (
        <View style={style.field}>
            <Text style={style.label}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#ADADAD"
                onChangeText={onChange}
                style={style.input} />
        </View>
    );
}

const style = StyleSheet.create({
    field: {
        gap: 4,
    },
    label: {
        fontSize: 20,
        color: Colors.quasePreto,
    },
    input: {
        backgroundColor: Colors.branco,
        borderRadius: 8,
        fontSize: 16,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderColor: Colors.primaria,
        borderWidth: 1,
    }
});