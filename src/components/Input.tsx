import { forwardRef } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

export const Input = forwardRef<TextInput, TextInputProps>((props, ref) => {
  return <TextInput {...props} style={styles.input} ref={ref} />;
});

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 12,
    backgroundColor: 'white',
  },
});
