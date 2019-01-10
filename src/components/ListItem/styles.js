import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../common/colors';

export const styles  = StyleSheet.create({
    container: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'white',
        marginTop: 5,
        marginBottom: 5,

        shadowOpacity: 0.75,
        shadowRadius: 3,
        shadowColor: '#888',
        shadowOffset: { height: 3, width: 0 },
    },
    imgAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    groupContent: {
        paddingLeft: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    description: {
        fontSize: 12,
    },
    txtTitle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    }
});