import React, { useState } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';
import Sm from './sm';

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              Sync-OTP
            </Text>
            <View>
            <Sm/>
            </View>
        
            <Button
              title="Show User Instructions Again"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides} 
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
        />
      )}
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 's1',
    text: 'All OTPs on your PC seamlessly',
    title: 'Sync-OTP',
    image: {
      uri: 'https://pngtree.com/freepng/hand-drawn-black-and-white-line-drawing-laptop-illustration_5062131.html',
    },
    backgroundColor: '#1A1A40',
  },
  {
    key: 's2',
    title: 'User Instructions:',
    text: '1.Download the SOTP chrome extension and type the code here',
    image: {
      uri: 'https://pngtree.com/freepng/hand-drawn-black-and-white-line-drawing-laptop-illustration_5062131.html',
    },
    backgroundColor: '#270082',
  },
  {
    key: 's3',
    title: 'Voila..',
    text: 'Enjoy Effortless Experience',
    image: {
      uri: 'https://pngtree.com/freepng/hand-drawn-black-and-white-line-drawing-laptop-illustration_5062131.html',
    },
    backgroundColor: '#570530',
  },



];
