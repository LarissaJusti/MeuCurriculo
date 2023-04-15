import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text>Pagina Inicial</Text>
        <Text style={styles.titulo}></Text>
        <Text style={styles.titulotitulo}>Ei Gatinha!</Text>
        <Text style={styles.subtitulo}>Te conheço desde quando ce engatinha</Text>
        <Text style={styles.subsubtitulo}>Queria tanto que ce fosse minha, nossos ideais cabem numa caixinha</Text>
      
        <Button title="Sobre" onPress={ () => navigation.navigate('Sobre') }/>
        <Button title="Formação" onPress={ () => navigation.navigate('Formacao') }/>
        <Button title="Experiencia" onPress={ () => navigation.navigate('Experiencia') }/>
        <Button title="Curso" onPress={ () => navigation.navigate('Curso') }/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo: {
      borderRadius:5,
      backgroundColor: "#47fe2c",
      padding:10,
      fontSize:50,
    },
  
    subtitulo: {
      fonteSize:52,
      backgroundColor: "#68d114",
      marginTop:15,
      borderRadius:5,
    },
  
    titulotitulo: {
      fonteSize:85,
      backgroundColor: "#68d114",
      marginTop:15,
      borderRadius:5,
    }, 
    subsubtitulo: {
      fonteSize:85,
      backgroundColor: "#68d114",
      marginTop:15,
      borderRadius:5,
  
    }
  
    
  });
  
export default Home;
