import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function Clics() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.contadorContainer}>
        <Text style={styles.contador}>{contador}</Text>
      </View>

      <TouchableOpacity style={styles.botonClic} onPress={() => setContador(contador + 1)}>
        <Text style={styles.textoBoton}>Clic</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botonReiniciar} onPress={() => setContador(0)}>
        <Text style={styles.textoBoton}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contadorContainer: {
    borderWidth: 3,
    borderColor: '#0000ff',
    padding: 30,
    marginBottom: 20,
  },
  contador: {
    fontSize: 80,
    color: '#fff',
    fontWeight: 'bold',
  },
  botonClic: {
    backgroundColor: '#00ff00',
    padding: 20,
    borderRadius: 5,
    marginVertical: 10,
    width: 200,
    alignItems: 'center',
  },
  botonReiniciar: {
    backgroundColor: '#00ffff',
    padding: 20,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
  },
  textoBoton: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Clics;
