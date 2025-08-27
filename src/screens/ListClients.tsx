import { useCallback } from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { ClientNavigatorParamList } from '~/navigation/tab-navigator';
import { FloatingAddButton } from '~/components/FloatingAddButton';
import { useAppSelector } from '~/store';
import { Container } from '~/components/Container';
import { ItemCard } from '~/components/ItemCard';
import { Header } from '~/components/Header';
import { Client } from '~/@types/clients';

export function ListClientsScreen() {
  const { clients } = useAppSelector((state) => state.clients);
  const hasClients = clients.length > 0;
  const { navigate } = useNavigation<NavigationProp<ClientNavigatorParamList>>();

  const renderItem: ListRenderItem<Client> = useCallback(
    ({ item }) => (
      <ItemCard
        title={item.name}
        values={[
          {
            label: 'CNPJ',
            value: item.cnpj,
          },
          {
            label: 'Contato',
            value: item.contact,
          },
        ]}
      />
    ),
    []
  );

  return (
    <Container>
      <Header
        title="CLIENTES"
        subtitle={hasClients ? 'Contas cadastradas' : 'Nenhuma conta cadastrada'}
      />
      <FlatList data={clients} renderItem={renderItem} contentContainerStyle={styles.list} />
      <FloatingAddButton onPress={() => navigate('RegisterClient')} />
    </Container>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
    gap: 12,
  },
});
