const { Text, Button } = require("react-native")
import { useEffect } from 'react';

import {CameraKitCameraScreen} from 'react-native-camera-kit';

const QrScanner = ()=>{

  return (
    <View style={{flex: 1}}>
      <CameraKitCameraScreen
        showFrame={false}
        // Show/hide scan frame
        scanBarcode={true}
        // Can restrict for the QR Code only
        laserColor={'blue'}
        // Color can be of your choice
        frameColor={'yellow'}
        // If frame is visible then frame color
        colorForScannerFrame={'black'}
        // Scanner Frame color
        onReadCode={(event) => {
          console.log(event)
          onBarcodeScan(event.nativeEvent.codeStringValue)
        }}
      />
    </View>
  )
}

export default QrScanner;