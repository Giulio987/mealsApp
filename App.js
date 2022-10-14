import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavouriteScreen from './screens/FavouriteScreen';
import { Ionicons } from '@expo/vector-icons';
import FavouritesContextProvider from './store/context/favourite-context';
import { Provider } from 'react-redux';
import store from './store/redux/store';

//Stack è un oggetto con due proprietà Navigator e Screen -> è sia oggetto che componente di ordine alto
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      //NOTE APPLICATO A TUTTI GLI SCREEN DEL NAVIGATOR
      headerStyle: {
        backgroundColor: '#351401',
      },
      headerTintColor: 'white',
      sceneContainerStyle: {
        backgroundColor: '#3f2f25',
      },
      drawerContentStyle: {
        backgroundColor: '#351401',
      },
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#e4baa1',
      }}>
      <Drawer.Screen  name="Categories" component={CategoriesScreen} options={{
        title: 'All Categories',
        drawerIcon: ({color, size}) => {
          return <Ionicons name="list" size={size} color={color} />
        }
      }}/>
      <Drawer.Screen  name="Favourites" component={FavouriteScreen} options={{
        drawerIcon: ({color, size}) => {
          return <Ionicons name="star" size={size} color={color} />
        }
      }}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
    {/*   <FavouritesContextProvider > */}
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="MealsCategories"
            screenOptions={{
              //NOTE APPLICATO A TUTTI GLI SCREEN DEL NAVIGATOR
              headerStyle: {
                backgroundColor: '#351401',
              },
              headerTintColor: 'white',
              contentStyle: {
                backgroundColor: '#3f2f25',
              },
            }}
          >
            <Stack.Screen
              name={'MealsCategories'}
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={'MealsOverview'}
              component={MealsOverviewScreen}
              //NOTE Options da qui o da dentro il componente
              /*  options={({ navigation, route }) => {
                const catId = route.params.categoryId;
                return {
                  title: catId,
                };
              }} */
            />
            <Stack.Screen name={'MealDetail'} component={MealDetailScreen} options={{
            /*  
            //NOTE Se si necesita di comunicazione diretta col componente metterlo dentro
            headerRight:() => {
                return <Button title={"Tap me!"} onPress={()=>{}}/>
              } */
            }}/>
          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    {/*   </FavouritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
