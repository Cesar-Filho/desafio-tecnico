import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Header } from '~/components/Header';

export function TotalizerScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Totalizador" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
