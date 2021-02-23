import React, { Component } from "react";
import { Image, Text, View } from "react-native";

class MateriFlexBox extends Component {
    render() {
        return (
            <View>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: 'gray',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>

                    <View style={{ backgroundColor: 'red', width: 50, height: 50 }} />
                    <View style={{ backgroundColor: 'yellow', width: 50, height: 50 }} />
                    <View style={{ backgroundColor: 'cyan', width: 50, height: 50 }} />
                    <View style={{ backgroundColor: 'blue', width: 50, height: 50 }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text>Beramda</Text>
                    <Text>Video</Text>
                    <Text>Playlist</Text>
                    <Text>Komuniktas</Text>
                    <Text>Channel</Text>
                    <Text>Tentang</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                    <Image
                        source={{
                            uri:
                                'https://meetanentrepreneur.lu/wp-content/uploads/2019/08/profil-linkedin-300x300.jpg'
                        }}
                        style={{ width: 100, height: 100, borderRadius: 50, marginRight: 14 }}
                    />
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Marseeel DD</Text>
                        <Text>2 Subscriber</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default MateriFlexBox;