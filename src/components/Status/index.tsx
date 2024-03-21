import { View, Text } from 'react-native';
import { styles } from './styles';

type Props = {
  value: string;
  content: number;
  name: string;
};

export function Status({ value, name, content }: Props) {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.statusName,
          name === 'done' ? styles.statusDone : styles.statusCreated,
        ]}
      >
        {value}
      </Text>
      <View style={styles.containerNumber}>
        <Text style={styles.statusNumber}>{content}</Text>
      </View>
    </View>
  );
}
