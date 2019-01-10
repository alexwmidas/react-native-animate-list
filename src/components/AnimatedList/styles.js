import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../common/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: Colors.primary,
    height: 48,
    borderRadius: 24,
    paddingLeft: 48,
    paddingRight: 48,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  firstCardItem: {
    height: 200,
    backgroundColor: 'rgba(118, 115, 234, 0.9)',
  },
});
