import React from 'react'
import { View, Image, Text, Button } from 'react-native'

import { Divider } from '../Divider'

import { styles } from './style'
import Logo from '../../../assets/lamborghini-logo.png'
import { CAR_ASSETS_BASE_URL } from '../../constants/car'
import { BuyButton } from '../BuyButton/indetx'

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

  const renderPriceControls = () => (
    <View style={styles.priceLabelContainer}>
      <Button title='<' color={'#da9a16'} onPress={ () => {} } />

      <Text style={styles.priceLabel}>Valor</Text>
      
      <Button title='>' color={'#da9a16'} onPress={ () => {} } />
    </View>
  )

  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}

      <Divider />
      
      {renderCarDetails()}

      {renderCarImage()}

      <BuyButton />

      {renderPriceControls()}
    </View>
  )
}
