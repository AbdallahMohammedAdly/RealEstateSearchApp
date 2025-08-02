import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedProperty } from '../store/propertySlice';
import { Property } from '../types/property'; 
import { RootState } from '../store/store';





const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const properties = useSelector((state: RootState) => state.property.properties);
  const dispatch = useDispatch();

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyDY3LXRDoSr9Hqp0XKk1XcD4SgVeh2dAVA',
      version: 'weekly'
    });

    loader.load().then(() => {
      if (mapRef.current) {
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: 30.1553672, lng: 31.6322497 },
          zoom: 13
        });

        properties.forEach((property: Property) => {
          const marker = new google.maps.Marker({
            position: property.location,
            map,
            title: property.title
          });

          marker.addListener('click', () => {
            dispatch(setSelectedProperty(property));
          });
        });
      }
    });
  }, [properties, dispatch]);

  return (
    <div ref={mapRef} className="w-full h-[calc(100vh-4rem)]" />
  );
};

export default Map;