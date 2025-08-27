import { StyleSheet, View } from 'react-native';
import { Container } from '~/components/Container';
import { Button } from '~/components/Button';
import { Header } from '~/components/Header';
import { Input } from '~/components/Input';

export function RegisterClientScreen() {
  return (
    <Container>
      <Header title="NOVO CLIENTE" subtitle="Cadastre um novo cliente" />
      <View style={styles.content}>
        <Input placeholder="Nome da empresa" />
        <Input placeholder="CNPJ" />
        <Input placeholder="Contato" />
        <View style={styles.row}>
          <Button title="Voltar" />
          <Button title="Salvar" primary />
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
