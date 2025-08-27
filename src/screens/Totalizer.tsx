import { SafeAreaView, StyleSheet, View } from 'react-native';

import { TotalizerCard } from '~/components/TotalizerCard';
import { Header } from '~/components/Header';

export function TotalizerScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Totalizador" />
      <View style={styles.content}>
        <TotalizerCard title="Total de clientes cadastrados" value={150} />
        <TotalizerCard title="Total de contatos cadastrados" value={300} />
        <TotalizerCard title="Total de registros cadastrados" value={300} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
    gap: 16,
  },
});
