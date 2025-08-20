import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 8
  },
  logoContainer: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain'
  },
  imageLogo: {
    flex: 1,
    width: '40%',
    resizeMode: 'contain'
  }
})
