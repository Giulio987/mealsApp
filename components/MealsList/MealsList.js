import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MealItem from './MealItem';

const MealsList = ({items}) => {
    function renderMealItem(itemData) {
        return (
          <MealItem
            id={itemData.item.id}
            title={itemData.item.title}
            imageUrl={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
          />
        );
      }
    return(
        <View style={styles.container}>
        <FlatList
            data={items}
            keyExtractor={(item) => {
            return item.id;
            }}
            renderItem={renderMealItem}
        />
        </View>
    )
  
}

export default MealsList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
      },
})