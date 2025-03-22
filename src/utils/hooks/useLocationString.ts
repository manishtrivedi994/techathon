import { useState, useEffect } from 'react';
import Geocoder from 'react-native-geocoding'

const useAddressFromCoordinates = ({latitude, longitude}:any) => {
  const [address, setAddress] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = "AIzaSyDxUTWF0clQgqJpQ1el72RA4dBtVZSqMoc"

  useEffect(() => {
    if (!latitude || !longitude || !apiKey) {
      return;
    }

    const getAddress = async () => {
      setLoading(true);
      try {
        Geocoder.init(apiKey); // Initialize Geocoder with API key
        const json = await Geocoder.from(latitude, longitude);
        const addressComponent = json.results[0]?.formatted_address || 'Address not found';
        setAddress(addressComponent);
        setError(null);
      } catch (err:any) {
        setError(err);
        setAddress('');
      } finally {
        setLoading(false);
      }
    };

    getAddress();
  }, [latitude, longitude, apiKey]);

  return { address, error, loading };
};

export default useAddressFromCoordinates;