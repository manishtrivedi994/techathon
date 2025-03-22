import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  ActivityIndicator,
  Image,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import DeviceInfo from 'react-native-device-info';

const CameraScreen = () => {
  const cameraRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSimulator, setIsSimulator] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  useEffect(() => {
    const checkDevice = async () => {
      const isEmulator = await DeviceInfo.isEmulator();
      setIsSimulator(isEmulator);

      if (isEmulator) {
        setIsLoading(false);
        return;
      }

      requestPermission();
    };

    const requestPermission = async () => {
      try {
        if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Camera Permission',
              message: 'This app needs access to your camera to take pictures.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            }
          );
          setHasPermission(granted === PermissionsAndroid.RESULTS.GRANTED);
        } else {
          setHasPermission(true);
        }
      } catch (err) {
        console.warn(err);
        setHasPermission(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkDevice();
  }, []);

  const takePicture = async () => {
    if (isSimulator) {
      console.log('Taking mock picture on simulator');
      setCapturedImage('https://picsum.photos/400/600');
      return;
    }

    if (cameraRef.current) {
      try {
        const options = { quality: 0.5, base64: true };
        const data = await cameraRef.current.takePictureAsync(options);
        console.log('Photo URI:', data.uri);
        setCapturedImage(data.uri);
      } catch (error) {
        console.error('Failed to take picture:', error);
      }
    }
  };

  const onBarCodeRead = (e) => {
    console.log('Barcode data:', e.data);
    console.log('Barcode type:', e.type);

    // Handle successful QR code scan here
    alert(`QR code scanned: ${e.data}`); // Example: display an alert
    // You can navigate to a different screen or perform other actions here
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#fff" />
        <Text style={styles.loadingText}>Requesting Camera Permission...</Text>
      </View>
    );
  }

  if (isSimulator) {
    return (
      <View style={styles.container}>
        {capturedImage ? (
          <View style={styles.simulatorPreview}>
            <Image source={{ uri: capturedImage }} style={styles.mockImage} />
            <TouchableOpacity
              style={styles.capture}
              onPress={() => setCapturedImage(null)}
            >
              <Text style={styles.text}>RESET</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.simulatorPreview}>
            <Text style={styles.simulatorText}>Camera Preview (Simulator Mode)</Text>
            <Text style={styles.simulatorSubText}>
              Camera hardware is not available in simulators
            </Text>
            <TouchableOpacity onPress={takePicture} style={styles.capture}>
              <Text style={styles.text}>MOCK SNAP</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }

  if (!hasPermission) {
    return (
      <View style={styles.permissionDeniedContainer}>
        <Text style={styles.permissionDeniedText}>No access to camera</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.auto}
        captureAudio={false}
        onBarCodeRead={onBarCodeRead} // Add this line
        barCodeTypes={[RNCamera.Constants.BarCodeType.qr]} // Specify QR code type
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={takePicture} style={styles.capture}>
            <Text style={styles.text}>SNAP</Text>
          </TouchableOpacity>
        </View>
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  // ... (rest of your styles)
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  simulatorPreview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  simulatorText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  simulatorSubText: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 30,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  mockImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  capture: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 25,
    alignSelf: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  loadingText: {
    marginTop: 10,
    color: '#fff',
  },
  permissionDeniedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000',
  },
  permissionDeniedText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default CameraScreen;