import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class DisplayAnImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
            <Text>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>{ this.props.fishSize } in</Text>
          </TouchableOpacity>
        </View>
      <View contentComponentStyle={{ flex: 1 }} style={styles.pictures}>
        <Image
          style={{ flex: 1 }}
          source={{uri: global.hostname + '/getimg'}}
        />
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'indianred',
  },
  pictures: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  button: {
    padding: 20,
  },
});
