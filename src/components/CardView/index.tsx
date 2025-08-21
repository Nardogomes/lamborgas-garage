import React from 'react'
import { View, Image, Text } from 'react-native'

import { Divider } from '../Divider'

import { styles } from './style'
import Logo from '../../../assets/lamborghini-logo.png'
import { CAR_ASSETS_BASE_URL } from '../../constants/car'

export function CardView() {
  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
      <Image source={Logo} style={styles.imageLogo} />
    </View>
  )

  const renderCarDetails = () => (
    <View style={{ alignItems: 'center' }}>
      <Text style={styles.carBrand}>Lamborghini</Text>

      <Text style={styles.carName}>MODEL</Text>
    </View>
  )
  
  const renderCarImage = () => (
    <Image style={styles.carImage} source={{ uri: `${CAR_ASSETS_BASE_URL}2.png` }} />
  )

  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}

      <Divider />
      
      {renderCarDetails()}

      {renderCarImage()}
    </View>
  )
}
