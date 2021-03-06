import React, { Component, PropTypes  } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class Logo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var logo = this.props.size;
    console.log('logo TYPE', logo, this.props.logoLocation);
    var location = this.props.logoLocation;
    return(
      <View>
        <Image style={styles[logo]} source={location} />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  logoSmallest: {
    height: 20,
    width: 20,
    alignSelf: 'center'
  },
  logoSmaller: {
    height: 29,
    width: 29,
    alignSelf: 'center'
  },
  logoXSmall: {
    height: 40,
    width: 40,
    alignSelf: 'center'
  },
  logoSmall: {
    height: 60,
    width: 60,
    alignSelf: 'center'
  },
  logoMedium: {
    height: 75,
    width: 75,
    alignSelf: 'center'
  },
  logoMediumLarge: {
    height: 225,
    width: 225,
    alignSelf: 'center'
  },
  logoLarge: {
    height: 250,
    width: 250,
    alignSelf: 'center'
  },
  logoXLarge: {
    height: 350,
    width: 350,
    alignSelf: 'center'
  }
})
