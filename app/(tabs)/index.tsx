import {
  ScrollView,
  StyleSheet,
  Image,
  Platform,
  Button,
  View,
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function FinanceHomeScreen() {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContainer}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">
          Bem-vindo ao Finanças!
        </ThemedText>
        <ThemedText type="subtitle">
          Gerencie seus lançamentos financeiros de forma
          fácil
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          Passo 1: Visualizar Lançamentos
        </ThemedText>
        <ThemedText>
          Clique no botão abaixo para visualizar todos os
          lançamentos financeiros.
        </ThemedText>
        <Button
          title="Ver Todos os Lançamentos"
          onPress={() => {}}
        />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          Passo 2: Registrar Novo Lançamento
        </ThemedText>
        <ThemedText>
          Clique no botão abaixo para registrar um novo
          lançamento financeiro.
        </ThemedText>
        <Button title="Lançar" onPress={() => {}} />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          Passo 3: Acompanhar sua evolução
        </ThemedText>
        <ThemedText>
          Quando você registrar seus lançamentos, poderá
          acompanhar sua evolução financeira ao longo do
          tempo.
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    marginVertical: 20,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 20,
  },
  financeLogo: {
    height: 180,
    width: 180,
    borderRadius: 90,
    marginBottom: 20,
  },
});
