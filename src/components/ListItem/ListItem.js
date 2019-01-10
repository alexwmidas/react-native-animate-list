import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

import { getImageFromName } from '../../common/utils';
import { styles } from './styles';
const { width, height } = Dimensions.get('window');
const MAX_ANIMATION_LENGTH = 15;
export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideAnim: new Animated.Value(height - 50),
      marginAnim: new Animated.Value(300),
    };
  }

  componentDidMount() {
    // Separate the animation into two parts:
    // First: Slide Up animation
    // Second: Margin change animation - I found that margins between the listItems are same in the gif animation
    // ** I used the bezier animation with timing - you can test about that from here: http://cubic-bezier.com

    Animated.parallel([
      Animated.timing(this.state.slideAnim, {
        toValue: 0,
        easing: Easing.bezier(0, 1, 0, 1),
        duration: 1000,
        delay: 100,
      }),
      Animated.timing(this.state.marginAnim, {
        toValue: 5,
        easing: Easing.bezier(0, 1, 0, 1),
        duration: 1000,
        delay: 100,
      }),
    ]).start();
  }

  render() {
    const { data, dataIndex, style, isCardItem } = this.props;
    let { slideAnim, marginAnim } = this.state;
    const animatedStyle = [
      styles.container,
      style,
      {
        transform: [{ translateY: slideAnim }],
        marginTop: marginAnim,
      },
    ];

    if (isCardItem === true) {
      return (
        <View>
          <Animated.View style={animatedStyle}>
            <Text style={styles.txtTitle}>
              Welcome to React Native Animation!
            </Text>
          </Animated.View>
        </View>
      );
    } else {
      return (
        <Animated.View style={animatedStyle}>
          <Image
            source={getImageFromName('user1')}
            // source={{ uri: data.avatar_url }}
            style={styles.imgAvatar}
          />
          <View style={styles.groupContent}>
            <Text style={styles.title}>{data.login}</Text>
            <Text style={styles.description}>{data.node_id.substr(0, 8)}</Text>
          </View>
        </Animated.View>
      );
    }
  }
}

ListItem.propTypes = {
  data: PropTypes.object.isRequired,
  dataIndex: PropTypes.number.isRequired,
  isCardItem: PropTypes.bool,
  style: PropTypes.any,
};

ListItem.defaultProps = {
  isCardItem: false,
  style: {},
};
