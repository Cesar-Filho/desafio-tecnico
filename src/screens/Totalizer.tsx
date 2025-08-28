import { StyleSheet, View } from 'react-native';

import { TotalizerCard } from '~/components/TotalizerCard';
import { Container } from '~/components/Container';
import { Header } from '~/components/Header';
import { useAppSelector } from '~/store';

export function TotalizerScreen() {
  const { clients } = useAppSelector((state) => state.clients);
  const { contacts } = useAppSelector((state) => state.contacts);

  return (
    <Container>
      <Header title="Totalizador" />
      <View style={styles.content}>
        <TotalizerCard title="Total de clientes cadastrados" value={clients.length} />
        <TotalizerCard title="Total de contatos cadastrados" value={contacts.length} />
        <TotalizerCard
          title="Total de registros cadastrados"
          value={clients.length + contacts.length}
        />
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
