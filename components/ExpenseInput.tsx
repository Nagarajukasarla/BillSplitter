import { View, TextInput, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

interface ExpenseInputProps {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    share?: number;
}

export default function ExpenseInput({
    label,
    value,
    onChangeText,
    placeholder = "0.00",
    share
}: ExpenseInputProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                    <Text style={styles.currency}>₹</Text>
                    <TextInput
                        style={styles.input}
                        value={value}
                        onChangeText={onChangeText}
                        placeholder={placeholder}
                        keyboardType="numeric"
                        placeholderTextColor={Colors.textSecondary}
                    />
                </View>
                {share !== undefined && (
                    <View style={styles.shareContainer}>
                        <Text style={styles.shareText}>₹{share.toFixed(2)}</Text>
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
    },
    label: {
        color: Colors.text,
        fontSize: 16,
        marginBottom: 8,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    inputWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.surface,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: Colors.border,
        overflow: 'hidden',
    },
    currency: {
        color: Colors.textSecondary,
        fontSize: 18,
        paddingLeft: 16,
        fontWeight: '500',
    },
    input: {
        flex: 1,
        padding: 16,
        color: Colors.text,
        fontSize: 18,
        fontWeight: '500',
    },
    shareContainer: {
        backgroundColor: Colors.primary,
        padding: 16,
        borderRadius: 16,
        minWidth: 120,
        alignItems: 'center',
        shadowColor: Colors.primary,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    shareText: {
        color: Colors.text,
        fontSize: 16,
        fontWeight: '700',
    },
});
