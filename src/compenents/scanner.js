import React, {Component, Fragment} from 'react';
import  QRCodeScanner  from 'react-native-qrcode-scanner';
import { styles } from './styles';


import {
  TouchableOpacity,
  Text,
  StatusBar,
  Linking,
  View,
  Button,
} from 'react-native';

class Scanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scan: false,
      ScanResult: false,
      result: null,
    };
  }

  onSuccess = e => {
    const check = e.data.substring(0, 4);
    console.log('scanned data' + check);
    this.setState({
      result: e,
      scan: false,
      ScanResult: true,
    });
    if (check === 'http') {
      Linking.openURL(e.data).catch(err =>
        console.error('An error occured', err),
      );
    } else {
      this.setState({
        result: e,
        scan: false,
        ScanResult: true,
      });
    }
  };

  activeQR = () => {
    this.setState({
      scan: true,
    });
  };
  scanAgain = () => {
    this.setState({
      scan: true,
      ScanResult: false,
    });
  };
  render() {
    const {scan, ScanResult, result} = this.state;
    const desccription = 'BEAMS QR code Scanner';
    return (
      <View style={styles.parant}>
        <Fragment>
          <StatusBar barStyle="red" />
          <Text style={{textAlign: 'center', padding: 20, fontSize: 23,color:'#ffffff'}}>
            BEAMS Product School systtem
          </Text>
          {!scan && !ScanResult && (
            <View>
              <Text
                numberOfLines={8}
                style={{textAlign: 'center', padding: 30, fontSize: 23,color:'#ffffff'}}>
                {desccription}
              </Text>

              <TouchableOpacity
                onPress={this.activeQR}
                title="click me to open camera"
                style={styles.button}>
                <Text style={styles.text}>scane now</Text>
              </TouchableOpacity>
            </View>
          )}

          {ScanResult && (
            <Fragment>
              <Text >Result !</Text>
              <View >
                <Text>Type : {result.type}</Text>
                <Text>Result : {result.data}</Text>
                <Text numberOfLines={1}>RawData: {result.rawData}</Text>
                <TouchableOpacity onPress={this.scanAgain}>
                  <Text style={styles.text}>Click to Scan again!</Text>
                </TouchableOpacity>
              </View>
            </Fragment>
          )}

          {scan && (
            <QRCodeScanner
              reactivate={true}
              showMarker={true}
              ref={node => {
                this.scanner = node;
              }}
              onRead={this.onSuccess}
             
              bottomContent={
                <View style={{paddingTop:30}}>
                  <TouchableOpacity onPress={() => this.scanner.reactivate()}>
                    <Text>OK. Got it!</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => this.setState({scan: false})}>
                    <Text>Stop Scan</Text>
                  </TouchableOpacity>
                </View>
              }
            />
          )}
        </Fragment>
      </View>
    );
  }
}
export default Scanner;