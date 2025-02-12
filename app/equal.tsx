import { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import ExpenseInput from '../components/ExpenseInput';
import BottomNavigation from '../components/BottomNavigation';
import { Colors } from '../constants/Colors';

export default function EqualSplit() {
    const [totalAmount, setTotalAmount] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState('2');

    const calculateShare = () => {
        const total = parseFloat(totalAmount) || 0;
        const people = parseInt(numberOfPeople) || 2;
        return total / people;
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

                <ExpenseInput
                    label="Number of People"
                    value={numberOfPeople}
                    onChangeText={setNumberOfPeople}
                    placeholder="2"
                />

                <View style={styles.summaryContainer}>
                    <Text style={styles.summaryText}>
                        Each person pays: ₹{calculateShare().toFixed(2)}
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
        backgroundColor: Colors.background,
    },
    content: {
        flex: 1,
        padding: 20,
    },
    summaryContainer: {
        backgroundColor: Colors.surface,
        padding: 20,
        borderRadius: 16,
        marginTop: 24,
        borderWidth: 1,
        borderColor: Colors.border,
        shadowColor: Colors.primary,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4.65,
        elevation: 8,
    },
    summaryText: {
        color: Colors.text,
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
        letterSpacing: 0.5,
    },
});
