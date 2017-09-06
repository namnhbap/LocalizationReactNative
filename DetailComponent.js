import React, {Component} from 'react';
import {
    StyleSheet, Text,
    View,
} from 'react-native';
import {strings} from "./src/res/strings/strings";

export default class DetailComponent extends Component {
    render() {
        return (
            <View style={styles.Container}>
                <Text style={styles.instructions}>
                    {strings.doubleTab},{'\n'}
                    {strings.shake}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
});