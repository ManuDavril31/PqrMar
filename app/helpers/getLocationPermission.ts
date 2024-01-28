/* eslint-disable prettier/prettier */
import {PermissionsAndroid} from 'react-native';
import GetLocation from 'react-native-get-location';

export const getLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Permiso de localizacion',
        message: 'Por favor acepta los permisos',
        buttonNeutral: 'Preguntame más tarde',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Puedes usar la localización');
      const result = getCurrentLocation();
      return result;
    } else {
      console.log('Permiso denegado');
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentLocation = async () => {
  return await GetLocation.getCurrentPosition();
  //   console.log(result);

  //   GetLocation.getCurrentPosition({
  //     enableHighAccuracy: true,
  //     timeout: 60000,
  //   })
  //     .then(location => {
  //       console.log('My localización actual es: ' + location);
  //     })
  //     .catch(error => {
  //       const {code, message} = error;
  //       console.warn(code, message);
  //     });
};
