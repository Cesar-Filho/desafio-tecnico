import { StyleSheet, View } from 'react-native';

import { TotalizerCard } from '~/components/TotalizerCard';
import { Container } from '~/components/Container';
import { Header } from '~/components/Header';

export function TotalizerScreen() {
  return (
    <Container>
      <Header title="Totalizador" />
      <View style={styles.content}>
        <TotalizerCard title="Total de clientes cadastrados" value={150} />
        <TotalizerCard title="Total de contatos cadastrados" value={300} />
        <TotalizerCard title="Total de registros cadastrados" value={300} />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
    gap: 16,
  },
});
