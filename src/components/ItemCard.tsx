import { StyleSheet, Text, View } from 'react-native';
import { BasicCard } from './BasicCard';
import { groupInPairs } from '~/utils/helpers';

type SectionValue = {
  label: string;
  value: string;
};

interface ItemCardProps {
  title: string;
  values: SectionValue[];
}

export function ItemCard({ title, values }: ItemCardProps) {
  const groupedValues = groupInPairs(values);

  return (
    <BasicCard>
      <Text style={styles.title}>{title}</Text>

      {groupedValues.map((pair, index) => (
        <View key={index} style={styles.section}>
          {pair.map((item, idx) => (
            <View key={idx} style={styles.item}>
              <Text style={styles.label}>{item.label}</Text>
              <Text style={styles.value}>{item.value}</Text>
            </View>
          ))}
        </View>
      ))}
    </BasicCard>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#555',
  },
  value: {
    fontSize: 14,
    color: '#333',
  },
  section: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  item: {
    minWidth: '50%',
  },
});
