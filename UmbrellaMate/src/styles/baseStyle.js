/** 
 *  basic style setting, sepecific setting should be in each component
*/
import {StyleSheet, Dimensions} from 'react-native'

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}
  
export const colors  = {
  primary: '#226B74',
  secondary: '#254B5A',
  tertiary: '#5DA6A7'
}

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
}

export const fontSizes = {
  sm: 12,
  md: 18,
  lg: 28
}

export const errorText = {
  fontWeight: "700",
  color: "red"
}

export const styles = StyleSheet.create({
  logInButton: {
    marginHorizontal: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  resetPasswordButton: {
    marginTop: 10,
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  startPageButton: {
    width: '100%', 
    height: '100%', 
    justifyContent: "center",
  },
});
