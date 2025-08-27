import { ButtonProps, StyleSheet, Text, TouchableOpacity } from 'react-native';

type CustomButtonProps = ButtonProps & {
  primary?: boolean;
};

export function Button(props: CustomButtonProps) {
  return (
    <TouchableOpacity {...props} style={[styles.button, props.primary && styles.primary]}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'gray',
    borderRadius: 4,
    padding: 12,
    flex: 1,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  primary: {
    backgroundColor: '#007bff',
  },
});
