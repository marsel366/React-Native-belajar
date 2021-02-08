import React from 'react';
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

}

export default App;