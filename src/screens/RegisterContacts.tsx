import { Alert, StyleSheet, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container } from '~/components/Container';
import { Button } from '~/components/Button';
import { Header } from '~/components/Header';
import { Input } from '~/components/Input';
import { useRef, useState } from 'react';
import { useAppDispatch } from '~/store';
import { ContactsActions } from '~/store/slices/contacts';
import { maskDate, maskPhone } from '~/utils/helpers';

export function RegisterContactScreen() {
  const { goBack } = useNavigation();
  const dispatch = useAppDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [updatedAt, setUpdatedAt] = useState('');

  const emailRef = useRef<TextInput>(null);
  const phoneRef = useRef<TextInput>(null);
  const roleRef = useRef<TextInput>(null);
  const updatedAtRef = useRef<TextInput>(null);

  const submit = () => {
    if (!name || !email || !phone || !updatedAt || !role) {
      return Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
    }
    dispatch(
      ContactsActions.addContact({
        name,
        email,
        phone,
        role,
        updated_at: updatedAt,
      })
    );
    goBack();
  };

  return (
    <Container>
      <Header title="NOVO CONTATO" subtitle="Cadastre um novo contato" />
      <View style={styles.content}>
        <Input
          placeholder="Nome completo"
          onChangeText={setName}
          value={name}
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current?.focus()}
        />
        <Input
          ref={emailRef}
          placeholder="E-mail"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
          returnKeyType="next"
          onSubmitEditing={() => phoneRef.current?.focus()}
        />
        <Input
          ref={phoneRef}
          placeholder="Telefone"
          keyboardType="phone-pad"
          maxLength={15}
          onChangeText={(text) => setPhone(maskPhone(text))}
          value={phone}
          returnKeyType="next"
          onSubmitEditing={() => roleRef.current?.focus()}
        />
        <Input
          ref={roleRef}
          placeholder="Cargo"
          onChangeText={setRole}
          value={role}
          returnKeyType="next"
          onSubmitEditing={() => updatedAtRef.current?.focus()}
        />
        <Input
          ref={updatedAtRef}
          placeholder="Data do último contato"
          keyboardType="numeric"
          maxLength={10}
          onChangeText={(text) => setUpdatedAt(maskDate(text))}
          value={updatedAt}
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
