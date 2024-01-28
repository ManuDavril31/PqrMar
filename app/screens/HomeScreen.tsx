/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text} from 'react-native';
import MapView, {Marker, Polygon} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

export const HomeScreen = () => {
  const [origin, setOrigin] = useState({
    latitude: 8.749003,
    longitude: -75.864051,
    // latitude: 8.000476,
    // longitude: -75.231853,
  });

  const [destination, setDestination] = useState({
    latitude: 8.736346,
    longitude: -75.872205,
    // latitude: 8.378526,
    // longitude: -75.571926,
  });
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
