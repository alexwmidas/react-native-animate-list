import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../common/colors';

export const styles  = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: Colors.primary,
        height: 48,
        width: 200,
        borderRadius: 24,
        paddingLeft: 48,
        paddingRight: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    list: {
        flex: 1,
        marginTop: 50,
    },
});