import { useCallback } from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { ContactNavigatorParamList } from '~/navigation/tab-navigator';
import { FloatingAddButton } from '~/components/FloatingAddButton';
import { useAppSelector } from '~/store';
import { Container } from '~/components/Container';
import { ItemCard } from '~/components/ItemCard';
import { Header } from '~/components/Header';
import { Contact } from '~/@types/contacts';

export function ListContactsScreen() {
  const { contacts } = useAppSelector((state) => state.contacts);
  const hasContacts = contacts.length > 0;
  const { navigate } = useNavigation<NavigationProp<ContactNavigatorParamList>>();

  const renderItem: ListRenderItem<Contact> = useCallback(
    ({ item }) => (
      <ItemCard
        title={item.name}
        values={[
          {
            label: 'Telefone',
            value: item.phone,
          },
          {
            label: 'E-email',
            value: item.email,
          },
          {
            label: 'Data do último contato',
            value: item.updated_at,
          },
          {
            label: 'Cargo',
            value: item.role,
          },
        ]}
      />
    ),
    []
  );

  return (
    <Container>
      <Header
        title="CONTATOS"
        subtitle={hasContacts ? 'Contatos cadastrados' : 'Nenhum contato cadastrado'}
      />
      <FlatList data={contacts} renderItem={renderItem} contentContainerStyle={styles.list} />
      <FloatingAddButton onPress={() => navigate('RegisterContact')} />
    </Container>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
    gap: 12,
  },
});
