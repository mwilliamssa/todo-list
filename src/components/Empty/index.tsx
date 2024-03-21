import { Text, View, Image } from 'react-native';
import { styles } from './styles';

export function Empty() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/clipboard.png')}
        style={styles.image}
      />
      <Text style={styles.topText}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.bottomText}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
