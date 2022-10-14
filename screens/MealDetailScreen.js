import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useLayoutEffect } from 'react';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import { FavouritesContex } from '../store/context/favourite-context';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite, removeFavourite } from '../store/redux/reducers/favourites';

const MealDetailScreen = ({ navigation, route }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  //const favCtx = useContext(FavouritesContex);

  const favMealIds = useSelector((state) => state.favouriteMeals.ids)
  const dispatch = useDispatch();

  const mealIsFavourite = favMealIds.includes(mealId)

  function changeFavuriteStatusHandler() {
    if(mealIsFavourite){
     /*  favCtx.removeFavourite(mealId) */
     dispatch(removeFavourite({id: mealId}))
   
    }
    else {
      dispatch(addFavourite({id: mealId}))
    }
  }


  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
         <IconButton onPress={changeFavuriteStatusHandler} icon={mealIsFavourite? 'star': 'star-outline'} color={"white"}/>
        );
      }
    })
  }, [navigation, changeFavuriteStatusHandler])
  return (
    <ScrollView style={styles.scrollContainer} bounces={false}>
      <Image
        source={{
          uri: selectedMeal.imageUrl,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.lisOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  scrollContainer:{
    marginBottom: 32
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: { color: 'white' },
  listContainer: {
    width: '80%',
  },
  lisOuterContainer: {alignItems:'center'}
    
});
