import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

type RouteType = '/exact' | '/equal' | '/percentage';

export default function BottomNavigation() {
    const router = useRouter();
    const pathname = usePathname();

    const navigate = (path: RouteType) => {
        if (pathname !== path) {
            router.replace(path as any);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.tab, pathname === '/exact' && styles.activeTab]}
                onPress={() => navigate('/exact')}
            >
                <Ionicons
                    name="home"
                    size={24}
                    color={pathname === '/exact' ? '#60A5FA' : '#ffffff'}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.tab, pathname === '/equal' && styles.activeTab]}
                onPress={() => navigate('/equal')}
            >
                <Ionicons
                    name="people"
                    size={24}
                    color={pathname === '/equal' ? '#60A5FA' : '#ffffff'}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.tab, pathname === '/percentage' && styles.activeTab]}
                onPress={() => navigate('/percentage')}
            >
                <Ionicons
                    name="pie-chart"
                    size={24}
                    color={pathname === '/percentage' ? '#60A5FA' : '#ffffff'}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#2D2D2D',
        paddingBottom: 25,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#3D3D3D',
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    activeTab: {
        borderTopWidth: 2,
        borderTopColor: '#60A5FA',
    },
});
