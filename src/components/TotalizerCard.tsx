import { StyleSheet, Text } from 'react-native';
import { BasicCard } from './BasicCard';

export function TotalizerCard({ title, value }: { title: string; value: number }) {
  return (
    <BasicCard>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </BasicCard>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  value: {
    fontSize: 18,
    textAlign: 'center',
  },
});
