/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text} from 'react-native';
import MapView, {Marker, Polygon} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {getLocationPermission} from '../helpers/getLocationPermission';
import {Location} from 'react-native-get-location';
import {useLocations} from '../hooks/useLocations';
const car = require('../assets/img/car.png');

export const HomeScreen = () => {
  const [origin, setOrigin] = useState({
    latitude: 8.740579,
    longitude: -75.868884,
    // latitude: 8.000476,
    // longitude: -75.231853,
  });
  const [destination, setDestination] = useState({
    latitude: 8.738747,
    longitude: -75.869529,
    // latitude: 8.378526,
    // longitude: -75.571926,
  });
  const {isloading, myLocation} = useLocations();

  if (isloading) {
    return <ActivityIndicator color={'#000'} size={100} />;
  }

  return (
    <>
      <Text>Hello from HomeScreen</Text>
      <MapView
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={origin}
          draggable
          onDragEnd={({nativeEvent}) => {
            // setOrigin(cros);
            console.log(nativeEvent);
          }}
        />
        <Marker coordinate={destination} draggable />
        {/* MI POSICION */}
        <Marker coordinate={myLocation!} draggable image={car} />
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey="AIzaSyBkbDx7qoxq4LjlCf803h_tfyzqVb3_pYY"
          strokeColor="gray"
          strokeWidth={3}
        />
      </MapView>
    </>
  );
};
