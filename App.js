

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

import LinkableText from './common/LinkableText/index';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyling}> Hello World</Text>

        <LinkableText sizeFont={20} underline={'underline'}>This is Sample Text</LinkableText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0FFFF',
  },
  textStyling:{
    fontSize:20,
    fontWeight: 'bold'
  }
});
