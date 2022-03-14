import HomeScreen from './src/pages/home/HomeScreen';
import DetailsScreen from './src/pages/Details/DetailScreen';
import MenuSelectionScreen from './src/pages/MenuSelection/MenuSelectionScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// here we can import our redux store then wrap all our store to set up a redux store 

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"  screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="MenuSelectionScreen" component={MenuSelectionScreen} />
      </Stack.Navigator>    
    </NavigationContainer>
  );
}


