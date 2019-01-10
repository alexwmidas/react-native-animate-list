
import React, { Component } from 'react';
import {
    Text,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    View,
} from 'react-native';
import PropTypes from 'prop-types';

import { ListItem } from '../';
import { styles } from './styles';

export default class AnimatedList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowList: false,
        };
    }

    _keyExtractor = (item, index) => item.node_id;

    renderListItem = ({ item, index }) => (
        <ListItem
            style={index === 0 ? styles.firstCardItem : {}}
            isCardItem={index === 0}
            data={item}
            dataIndex={index}
        />
    );

    render() {
        const { style } = this.props;
        return (
            <FlatList
                style={style}
                data={this.props.data}
                renderItem={this.renderListItem}
                keyExtractor={this._keyExtractor}
            />
        );
    }
}

AnimatedList.propTypes = {
    data: PropTypes.array.isRequired,
    style: PropTypes.any,
};

AnimatedList.defaultProps = {
    data: [
        {

        },
    ]
};
