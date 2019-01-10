/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { fetchUsers } from '../../actions/user';
import { styles } from './styles';
import { AnimatedList } from '../../components';
class MainContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPressStart = () => {
    // call action
    this.props.fetchUsers();
  };

  render() {
    const { user } = this.props;
    return (
      <View style={styles.container}>
        {user.users && user.users.length > 0 ? (
          <AnimatedList style={styles.list} data={user.users} />
        ) : (
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.onPressStart} style={styles.button}>
              {user.isFetching === true ? (
                <ActivityIndicator size="small" color="#ffffff" />
              ) : (
                <Text style={styles.buttonText}>Start</Text>
              )}
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

/**
 * No Props for this Container
 * @param state
 */
// MainContainer.propTypes = {
//
// };
//
// MainContainer.defaultProps = {
//
// };

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainContainer);
