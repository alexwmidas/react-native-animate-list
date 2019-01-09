/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";

import { fetchUsers } from '../../actions/users';
import { styles } from './styles';

class MainContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isShowList: false,
        };
    }

    onPressStart = () => {
        // this.setState({ isShowList: true });
        this.props.fetchUsers();
    };

    render() {
        const { isShowList } = this.state;
        const { users } = this.props;
        console.log("users=", users);
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={this.onPressStart}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Start</Text>
                </TouchableOpacity>
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
    users: state.users,
});

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
    mapStateToProps,
   mapDispatchToProps
)(MainContainer);
