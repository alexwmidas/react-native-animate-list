
import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import PropTypes from 'prop-types';

import { getImageFromName } from "../../common/utils";
import { styles } from './styles';

export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { data } = this.props;
        return (
            <View style={styles.container}>
                <Image
                    defaultSource={getImageFromName('user1')}
                    source={{ uri: data.avatar_url }}
                    style={styles.imgAvatar}
                />
                <View style={styles.groupContent}>
                    <Text style={styles.title}>{data.login}</Text>
                    <Text style={styles.description}>{data.node_id.substr(0, 8)}</Text>
                </View>
            </View>
        );
    }
}

ListItem.propTypes = {
    data: PropTypes.object.isRequired,
};

ListItem.defaultProps = {

};
