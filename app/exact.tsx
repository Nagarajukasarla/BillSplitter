import { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import ExpenseInput from '../components/ExpenseInput';
import BottomNavigation from '../components/BottomNavigation';

export default function ExactSplit() {
    const [totalAmount, setTotalAmount] = useState('');
    const [shares, setShares] = useState(['', '']);

    const calculateRemaining = () => {
        const total = parseFloat(totalAmount) || 0;
        const allocated = shares.reduce((sum, share) => sum + (parseFloat(share) || 0), 0);
        return total - allocated;
    };

    const addPerson = () => {
        setShares([...shares, '']);
    };

    const updateShare = (index: number, value: string) => {
        const newShares = [...shares];
        newShares[index] = value;
        setShares(newShares);
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.content}>
                <ExpenseInput
                    label="Total Amount"
                    value={totalAmount}
                    onChangeText={setTotalAmount}
                    placeholder="Enter total amount"
                />

                {shares.map((share, index) => (
                    <ExpenseInput
                        key={index}
                        label={`Person ${index + 1}'s Share`}
                        value={share}
                        onChangeText={(value) => updateShare(index, value)}
                        share={parseFloat(share) || 0}
                    />
                ))}

                <TouchableOpacity style={styles.addButton} onPress={addPerson}>
                    <Text style={styles.addButtonText}>Add Person</Text>
                </TouchableOpacity>

                <View style={styles.summaryContainer}>
                    <Text style={styles.summaryText}>
                        Remaining: ₹{calculateRemaining().toFixed(2)}
                    </Text>
                </View>
            </ScrollView>

            <BottomNavigation />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292E',
    },
    content: {
        flex: 1,
        padding: 20,
    },
    addButton: {
        backgroundColor: '#4CAF50',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 16,
    },
    addButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    summaryContainer: {
        backgroundColor: '#3D3D3D',
        padding: 16,
        borderRadius: 8,
        marginTop: 16,
    },
    summaryText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
