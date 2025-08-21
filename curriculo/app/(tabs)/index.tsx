import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Felipe e Vitor Gonçalves</Text>
      <Link href="/about" style={styles.button}>
        Vá para pagina About
      </Link>
      <Link href="/pagina1" style={styles.button}>
        Vá para a Pagina 1
      </Link>
      <Link href="/pagina2" style={styles.button}>
        Vá para a Pagina 2
      </Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0073ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    marginBottom: 20,
    fontSize: 100
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#272121ff',
    marginVertical: 10,
  },
});
