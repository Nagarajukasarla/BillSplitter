import { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import ExpenseInput from '../components/ExpenseInput';
import BottomNavigation from '../components/BottomNavigation';
import { Ionicons } from '@expo/vector-icons';

export default function PercentageSplit() {
    const [totalAmount, setTotalAmount] = useState('');
    const [percentages, setPercentages] = useState(['50', '50']);

    const calculateShare = (percentage: string) => {
        const total = parseFloat(totalAmount) || 0;
        const share = total * (parseFloat(percentage) || 0) / 100;
        return share;
    };

    const updatePercentage = (index: number, value: string) => {
        const newPercentages = [...percentages];
        newPercentages[index] = value;
        setPercentages(newPercentages);
    };

    const addPerson = () => {
        setPercentages([...percentages, '0']);
    };

    const totalPercentage = percentages.reduce((sum, percent) =>
        sum + (parseFloat(percent) || 0), 0
    );

    return (
        <View style={styles.container}>
            <ScrollView style={styles.content}>
                <ExpenseInput
                    label="Total Amount"
                    value={totalAmount}
                    onChangeText={setTotalAmount}
                    placeholder="Enter total amount"
                />

                {percentages.map((percentage, index) => (
                    <ExpenseInput
                        key={index}
                        label={`Person ${index + 1}'s Percentage`}
                        value={percentage}
                        onChangeText={(value) => updatePercentage(index, value)}
                        share={calculateShare(percentage)}
                    />
                ))}

                <TouchableOpacity style={styles.addButton} onPress={addPerson}>
                    <Ionicons name="add-circle-outline" size={24} color="#ffffff" />
                    <Text style={styles.addButtonText}>Add Person</Text>
                </TouchableOpacity>

                <View style={[
                    styles.summaryContainer,
                    totalPercentage !== 100 && styles.errorContainer
                ]}>
                    <Text style={[
                        styles.summaryText,
                        totalPercentage !== 100 && styles.errorText
                    ]}>
                        Total Percentage: {totalPercentage}%
                        {totalPercentage !== 100 && ' (Should be 100%)'}
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
        backgroundColor: '#1a1b1e',
    },
    content: {
        flex: 1,
        padding: 20,
    },
    addButton: {
        backgroundColor: '#2563eb',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginVertical: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
    },
    addButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
    summaryContainer: {
        backgroundColor: '#2D2D2D',
        padding: 16,
        borderRadius: 12,
        marginTop: 16,
    },
    errorContainer: {
        backgroundColor: '#450a0a',
    },
    summaryText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    errorText: {
        color: '#fca5a5',
    },
});
