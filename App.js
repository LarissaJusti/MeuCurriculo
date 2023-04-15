import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa as páginas da aplicação
import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Formacao from './src/pages/Formacao';
import Experiencia from './src/pages/Experiencia'; 
import Curso from './src/pages/Curso';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= "Home" component={Home}/>
        <Stack.Screen name= "Sobre" component={Sobre} />
        <Stack.Screen name= "Formacao" component={Formacao} />
        <Stack.Screen name= "Experiencia" component={Experiencia} />
        <Stack.Screen name= "Curso" component={Curso} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}