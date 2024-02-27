import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BookList from '../screens/book-list/book-list';
import BookDetailsScreen from '../screens/book-details';
const Stack = createStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="BookList" component={BookList} options={{ presentation: "modal" }} />
        <Stack.Screen name="BookDetailsScreen" component={BookDetailsScreen} options={{ presentation: "modal" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
