import { Alert, StyleSheet, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container } from '~/components/Container';
import { Button } from '~/components/Button';
import { Header } from '~/components/Header';
import { Input } from '~/components/Input';
import { useRef, useState } from 'react';
import { useAppDispatch } from '~/store';
import { ClientsActions } from '~/store/slices/client';
import { maskCNPJ } from '~/utils/helpers';

export function RegisterClientScreen() {
  const { goBack } = useNavigation();
  const dispatch = useAppDispatch();

  const [name, setName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [contact, setContact] = useState('');

  const cnpjRef = useRef<TextInput>(null);
  const contactRef = useRef<TextInput>(null);

  const submit = () => {
    if (!name || !cnpj || !contact) {
      return Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
    }
    dispatch(ClientsActions.addClient({ name, cnpj, contact }));
    goBack();
  };

  return (
    <Container>
      <Header title="NOVO CLIENTE" subtitle="Cadastre um novo cliente" />
      <View style={styles.content}>
        <Input
          placeholder="Nome da empresa"
          onChangeText={setName}
          value={name}
          returnKeyType="next"
          onSubmitEditing={() => cnpjRef.current?.focus()}
        />
        <Input
          ref={cnpjRef}
          placeholder="CNPJ"
          keyboardType="numeric"
          maxLength={18}
          onChangeText={(text) => setCnpj(maskCNPJ(text))}
          value={cnpj}
          returnKeyType="next"
          onSubmitEditing={() => contactRef.current?.focus()}
        />
        <Input
          ref={contactRef}
          placeholder="Contato"
          onChangeText={setContact}
          value={contact}
          returnKeyType="done"
          onSubmitEditing={submit}
        />
        <View style={styles.row}>
          <Button title="Voltar" onPress={goBack} />
          <Button title="Salvar" primary onPress={submit} />
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 4,
    padding: 16,
    gap: 12,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
  },
});
