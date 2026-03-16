import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/logo_banco_do_brasil.png')}/>
      </View>

      <View style={styles.body}>
        
        <View style={styles.card}>
          <Text style={styles.bold}>Cartão de crédito</Text>
          <Text>Fatura</Text>
          <Text style={styles.valor}>R$ 1.500,00</Text>
          <View style={styles.btn}><Text style={{color: '#fff'}}>Pagar fatura</Text></View>
        </View>

        <View style={styles.card}>
          <Text style={styles.bold}>Conta</Text>
          <Text>Saldo disponível</Text>
          <Text style={styles.valor}>R$ 300,00</Text>
          <View style={styles.btn}><Text style={{color: '#fff'}}>Transferir</Text></View>
        </View>

        <View style={styles.btnAmarelo}>
          <Text style={styles.bold}>Meus cartões</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff200',
  },
  header: {
  padding: 40,
  paddingBottom: 20
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#1E59AE'
  },
  body: {
    flex: 1,
    backgroundColor: '#1E59AE',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    gap: 20
  },
  card: {
    backgroundColor: '#DDD',
    padding: 20,
    borderRadius: 20
  },
  bold: {
    fontWeight: 'bold',
  },
  valor:{
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#1E59AE'
  },
  btn: {
    backgroundColor: '#1E59AE',
    padding: 10, 
    borderRadius: 8,
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    alignItems: 'flex-start'
  },
  btnAmarelo: {
    backgroundColor: '#fff200',
    padding: 30,
    borderRadius: 15,
    alignItems: 'center'
  }
});
