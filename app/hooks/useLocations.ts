/* eslint-disable prettier/prettier */
import {useEffect, useState} from 'react';
import {getLocationPermission} from '../helpers/getLocationPermission';

export const useLocations = () => {
  const [isloading, setIsloading] = useState(true);
  const [myLocation, setMyLocation] = useState<any>();

  useEffect(() => {
    const myLocation2 = async () => {
      const result = await getLocationPermission();
      setMyLocation(result);
      setIsloading(false);
      console.log(result);
    };

    myLocation2();
  }, []);

  return {
    isloading,
    myLocation,
  };
};
