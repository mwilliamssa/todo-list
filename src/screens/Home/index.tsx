import { Content } from '../../components/Content';
import { Header } from '../../components/Header';
import { styles } from './styles';
import { Text, View } from 'react-native';

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Content />
    </View>
  );
}
