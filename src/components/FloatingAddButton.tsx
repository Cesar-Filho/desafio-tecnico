import { TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface FloatingAddButtonProps {
  onPress: () => void;
}

export function FloatingAddButton({ onPress }: FloatingAddButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <MaterialCommunityIcons name="plus" size={24} color="blue" />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 24,
    bottom: 24,
    backgroundColor: 'white',
    borderRadius: 32,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
});
