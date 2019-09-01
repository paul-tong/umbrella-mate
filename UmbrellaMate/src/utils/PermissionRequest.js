import { PermissionsAndroid } from 'react-native';

// request location permission
export async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Umbrella Mate Location Permission',
        message:
          'Umbrella Mate App needs access to your location ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      alert("Has no location permisson. Abort this operation.");
      return false;
    }
  } catch (err) {
    alert("Request location permisson error");
    return false;
  }
}