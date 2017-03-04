import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  NavigatorIOS,
  TouchableHighlight,
  TextInput,
  ActivityIndicatorIOS,
  Modal
} from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';

let connection = require('../Utils/connection');
const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://raw.githubusercontent.com/aautem/triceratops/expertChat/app/assets/imgs/female.jpg',
    subtitle: 'Home / Tech',
    rating: 5.0
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://raw.githubusercontent.com/aautem/triceratops/expertChat/app/assets/imgs/male.jpg',
    subtitle: 'Food / Entertainment',
    rating: 4.8
  },
  {
    name: 'Cortney Larson',
    avatar_url: 'https://raw.githubusercontent.com/aautem/triceratops/expertChat/app/assets/imgs/female.jpg',
    subtitle: 'Home / Tech',
    rating: 4.8
  },
  {
    name: 'Ben Thompson',
    avatar_url: 'https://raw.githubusercontent.com/aautem/triceratops/expertChat/app/assets/imgs/male.jpg',
    subtitle: 'Men\'s Fashion / Food',
    rating: 4.7
  },
  {
    name: 'Sally Lexington',
    avatar_url: 'https://raw.githubusercontent.com/aautem/triceratops/expertChat/app/assets/imgs/female.jpg',
    subtitle: 'Tech / Women\'s Fashion',
    rating: 4.7
  },
  {
    name: 'Jeff Sanders',
    avatar_url: 'https://raw.githubusercontent.com/aautem/triceratops/expertChat/app/assets/imgs/male.jpg',
    subtitle: 'Entertainment',
    rating: 4.6
  },
  {
    name: 'Skylar Duncan',
    avatar_url: 'https://raw.githubusercontent.com/aautem/triceratops/expertChat/app/assets/imgs/male.jpg',
    subtitle: 'Home / Entertainment',
    rating: 4.2
  },
  {
    name: 'Joe Robinson',
    avatar_url: 'https://raw.githubusercontent.com/aautem/triceratops/expertChat/app/assets/imgs/male.jpg',
    subtitle: 'Food / Home',
    rating: 4.1
  },
  {
    name: 'Greg Anthony',
    avatar_url: 'https://raw.githubusercontent.com/aautem/triceratops/expertChat/app/assets/imgs/male.jpg',
    subtitle: 'Men\'s Fashion',
    rating: 3.9
  },
  {
    name: 'Molly Morgans',
    avatar_url: 'https://raw.githubusercontent.com/aautem/triceratops/expertChat/app/assets/imgs/female.jpg',
    subtitle: 'Entertainment / Women\'s Fashion',
    rating: 3.8
  },
  {
    name: 'Susan Thomas',
    avatar_url: 'https://raw.githubusercontent.com/aautem/triceratops/expertChat/app/assets/imgs/female.jpg',
    subtitle: 'Food / Home',
    rating: 3.6
  },
  {
    name: 'Frank Corgins',
    avatar_url: 'https://raw.githubusercontent.com/aautem/triceratops/expertChat/app/assets/imgs/male.jpg',
    subtitle: 'Men\'s Fashion / Tech',
    rating: 3.6
  },
  {
    name: 'Rusty Winfield',
    avatar_url: 'https://raw.githubusercontent.com/aautem/triceratops/expertChat/app/assets/imgs/male.jpg',
    subtitle: 'Food / Entertainment',
    rating: 3.5
  },
  {
    name: 'Erica Bonnie',
    avatar_url: 'https://raw.githubusercontent.com/aautem/triceratops/expertChat/app/assets/imgs/female.jpg',
    subtitle: 'Home / Women\'s Fashion',
    rating: 3.4
  },
  {
    name: 'Nancy Rogan',
    avatar_url: 'https://raw.githubusercontent.com/aautem/triceratops/expertChat/app/assets/imgs/female.jpg',
    subtitle: 'Tech / Food',
    rating: 3.4
  },
  {
    name: 'Peter Parsons',
    avatar_url: 'https://raw.githubusercontent.com/aautem/triceratops/expertChat/app/assets/imgs/male.jpg',
    subtitle: 'Entertainment / Home',
    rating: 3.4
  },
];

export default class TopExperts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };

    this.expert = null;
  }

  componentWillMount() {
    this.getTopExperts();
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  getTopExperts() {
    // this.props.navigator.push({"screen":"TopExperts"});
    fetch(connection + '/api/experts', {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then((response) => response.json())
    .then((experts) => {
      if (!experts) {
        AlertIOS.alert('No Registered Experts.');
      } else {
        // STORE EXPERTS SOMEWHERE LOCALLY
      }
    })
    .done();
  }

  showExpert(expert) {
    this.expert = expert;
    console.log('Current Expert:', this.expert);
    this.setModalVisible(true);
  }

  render () {
    return (
      <View>
        <Text style={styles.title}>Top Experts</Text>
        <ScrollView style={{marginBottom: 100}}>
          <List containerStyle={{marginTop: 15}}>
            {list.map(function(expert, index) {
              return (
                <ListItem
                  roundAvatar
                  key={index}
                  title={expert.name}
                  subtitle={expert.subtitle}
                  avatar={{uri:expert.avatar_url}}
                  badge={{value: expert.rating.toFixed(1), badgeTextStyle: {color: 'white'}, badgeContainerStyle: {marginLeft: -80}}}
                  onPress={() => {this.showExpert(expert)}}
                />
              );
            }, this)}
          </List>
        </ScrollView>
        {this.expert &&
          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.modalVisible}
            >
            <View style={styles.mainContainer}>
              <Image source={{uri: this.expert.avatar_url}}
                style={{width: 250, height: 250, marginLeft: 30}} />
              <Text style={styles.name}>{this.expert.name}</Text>
              <Text style={styles.category}>{this.expert.subtitle}</Text>
              <Text style={styles.bio}>
                I became an expert wesjdkf asdnf ansdf asdfn aksdf asdfna asdfn asdlfk asdnfn asla sndfalsdjkfn adauhgsdn asdfn jasdf naldasd anjksd asdfn uvsan jsaf naskdf udvad nasdfnl ajnsd ndsa sjndf.
              </Text>
              <Button
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 10, marginTop: 10 }}
                style={styles.button}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
                raised title='Back' />
            </View>
          </Modal>
        }
      </View>
    );
  }

  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.title}>Top Experts</Text>
  //       <TouchableHighlight
  //           style={styles.button}
  //           onPress={this.getTopExperts.bind(this)}
  //           underlayColor="white">
  //           <Text style={styles.buttonText}>Discover</Text>
  //         </TouchableHighlight>
  //     </View>
  //   )
  // }
}

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  title: {
    marginTop: 75,
    fontSize: 18,
    textAlign: 'center',
    color: 'black'
  },
  name: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 28,
    textAlign: 'center',
    color: 'black'
  },
  wrapper: {
    marginTop: 1,
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  category: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white'
  },
  bio: {
    fontSize: 12,
    textAlign: 'center',
    color: 'black',
    marginTop: 15,
    marginBottom: 20
  }
});