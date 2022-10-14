import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Subtitle = ({children}) => {
  return (
    <View style={styles.subtitleContainer}>
    <Text style={styles.subtitle}>{children}</Text>
  </View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
//NOTE text non può ricevere il border
	subtitleContainer: {
		borderBottomColor: '#e2b457',
		borderBottomWidth: 2,
		padding: 6,
		marginHorizontal: 12,
		marginVertical: 4,
	},
  subtitle: {
    color: '#e2b457',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})