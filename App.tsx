import { StatusBar, Text } from 'react-native';
import { Home } from './src/screens/Home';
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

export default function App() {
  const [fontsloaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });
  return (
    <>
      {fontsloaded ? (
        <Home />
      ) : (
        <Text
          style={{
            color: 'red',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          A fonte não carregou
        </Text>
      )}
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </>
  );
}
