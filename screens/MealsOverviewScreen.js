import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { useRoute } from '@react-navigation/native';
import MealItem from '../components/MealsList/MealItem';
import MealsList from '../components/MealsList/MealsList';

//NOTE anche route viene passato di default -> per accedere ai params
const MealsOverviewScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;
  // const route = useRoute() -> Per i nested components è consigliato

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) !== -1;
  });

  //NOTE useLayouteffect si usa spesso quando si vogliono determinati effetti mentre i cambiamenti stanno avvenendo ma il componente non è ancora montato
  //Esegue simultaneamente all'esecuzione del componente
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === categoryId).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, categoryId]);



  return (
    <MealsList items={displayedMeals} />
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({

});
