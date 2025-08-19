import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#001fcc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraBox: {
    width: 350,
    height: '85%',
    borderWidth: 2,
    borderRadius: 6,
    borderColor: '#766cff',
    position: 'relative',
    overflow: 'hidden'
  },
  triangleCorner: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderTopWidth: 20,
    borderTopColor: '#766cff',
    borderRightWidth: 20,
    borderRightColor: 'transparent'
  },
  topRight: {
     top: 0,
     right: 0,
     transform: [{ rotate: '90deg' }]
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    transform: [{ rotate: '-90deg' }]
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    transform: [{ rotate: '180deg' }]
  }
})
