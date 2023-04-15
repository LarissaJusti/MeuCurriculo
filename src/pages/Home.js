import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text>MEU CURRICULO</Text>
        <Image source={require('../imagem/download.jpeg')}/>
        <Text style={styles.apresentacao}>Larissa Calcanho Justi </Text>
    
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
  })
  
export default Home;
