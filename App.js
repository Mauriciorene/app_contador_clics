import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Clics from './COMPONENTES/clics';

export default function App() {
  return (
    <View style={styles.containerPrincipal}>
      <Image source={require('./IMAGENES/logofreeCode.png')} style={styles.logo} />

      <View style={styles.containerContador}>
        <Clics />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: '#008080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerContador: {
    flex: 3,
    justifyContent: 'flex-start',
  },
  logo: {
    flex: 3,
    width: '80%',
    height: 80,
    resizeMode: 'contain',
    marginBottom: -170, 
  },
});
