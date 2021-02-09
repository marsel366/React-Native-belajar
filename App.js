import React, { Component } from 'react';
import { Text, View, Image, TextInput, StyleSheet } from 'react-native';
import lepi from './lepi.jpg'

const App = () => {
  return (
    <StylingReactNativeComponent />
  );
};

const StylingReactNativeComponent = () => {

  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>

      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'cyan',
          borderWidth: 2,
          borderColor: 'purple',
          marginTop: 20,
          marginleft: 20,
        }}
      />
      <View style={{
        padding: 12, backgroundColor: '#F2F2F2', width: 228
        , borderRadius: 8
      }}>
        <Image source={lepi}
          style={{ width: 200, height: 110, borderRadius: 8 }} />
        <Text style={{
          fontSize: 14, fontWeight: 'bold'
          , marginTop: 16
        }}>Asus Zenbook Pro</Text>
        <Text style={{
          fontSize: 12, fontWeight: 'bold'
          , marginTop: 12, color: '#F2994A'
        }}>Rp. 30.000.000</Text>
        <Text style={{
          fontSize: 12, fontWeight: '300'
          , marginTop: 12,
        }}>Jakarta Barat</Text>
        <View style={{
          backgroundColor: '#6FCF97', paddingVertical: 6,
          borderRadius: 25, marginTop: 20
        }}>
          <Text style={{
            fontSize: 14,
            fontWeight: '600', color: 'white', textAlign: 'center'
          }}>BUY NOW</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 40,
    color: 'cyan',


  }

})
const SampleComponent = () => {
  return (
    <View>
      <View style={{ width: 80, height: 80, backgroundColor: 'cyan' }} />
      <Text>Udins</Text>
      <Text>penyox</Text>
      <Bua />
      <Text>penyox</Text>
      <Poto />
      <TextInput style={{ borderWidth: 1 }} />
      <BoxGreen />
      <Profile />
    </View>
  )
}

const Bua = () => {
  return <Text>Tatang Kesemutan</Text>;
};

const Poto = () => {
  return <Image
    source={{ uri: 'https://placeimg.com/100/100/tech' }}
    style={{ width: 100, height: 100 }} />

};

class BoxGreen extends Component {
  render() {
    return <Text>Ini Component dri class</Text>
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{ uri: 'https://placeimg.com/100/100/animals' }}
          style={{ width: 100, height: 100 }} />
        <Text style={{ color: 'blue', fontsize: '24' }}>Gambar dari class</Text>
      </View>
    );
  }
}

export default App;