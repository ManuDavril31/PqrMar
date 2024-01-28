import {PermissionsAndroid} from 'react-native';

export const getLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Permiso de localizacion',
      },
    );
  } catch (error) {}
};
