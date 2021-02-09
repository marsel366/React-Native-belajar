import React, { Component } from 'react';
import { Text, View, Image, TextInput } from 'react-native';


const App = () => {
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
  );
};

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