import { StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../theme";

type props = {
    label: string,
    placeholder: string,
    onChange: (value: string) => void,
    secureTextEntry?: boolean
}

export default function InputField({ label, placeholder, onChange, secureTextEntry = false }: props) {

    const isSecret = secureTextEntry === true;

    return (
        <View style={style.field}>
            <Text style={style.label}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#ADADAD"
                onChangeText={onChange}
                secureTextEntry={isSecret}
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