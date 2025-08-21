import React from 'react'
import { View, Text, Button, Image } from 'react-native'

import { Divider } from '../Divider'

import { styles } from './style'
import Logo from '../../../assets/lamborghini-logo.png'

export function CardView() {
  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
      <Image source={Logo} style={styles.imageLogo} />
    </View>
  )

  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}
      <Divider />
    </View>
  )
}
