import { View, TouchableOpacity, Text } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import { styles } from './style'

export function BuyButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <FontAwesome6
          name='cart-shopping'
          size={20}
          color='white'
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Buy This</Text>
      </TouchableOpacity>
    </View>
  )
}
