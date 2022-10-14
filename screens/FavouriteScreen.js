import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { FavouritesContex } from '../store/context/favourite-context'
import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
import { useSelector } from 'react-redux';

const FavouriteScreen = () => {
	/* const favCtx = useContext(FavouritesContex); */
	const favMealIds = useSelector(state => state.favouriteMeals.ids);
	const favouriteMeals = MEALS.filter(meal => favMealIds.includes(meal.id))
	if(favouriteMeals.length === 0){
		return <View style={styles.rootContainer}>
			<Text style={styles.text}>You have no favourite meals yet.</Text>
		</View>
	}
  return (
    <MealsList items={favouriteMeals} />
  )
}

export default FavouriteScreen

const styles = StyleSheet.create({
	rootContainer:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 18,
		color: 'white',
		fontWeight: 'bold'
	}
})