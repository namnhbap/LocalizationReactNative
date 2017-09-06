import React, {Component} from 'react';
import {
    StyleSheet,
    Text, TouchableOpacity,
    View
} from 'react-native';
import {strings} from "./src/res/strings/strings";

export default class WelcomeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            language: true
        }
    }

    _changeLanguage = () => {
        this.setState((prevState) => ({
            language: !prevState.language
        })) //()=>(...) just like ()=>{return ...}
    };


    render() {
        let language = this.state.language ? 'vi' : 'en';
        strings.setLanguage(language);
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {strings.welcome}
                </Text>
                <Text style={styles.instructions}>
                    {strings.description}
                </Text>
                <Text style={styles.instructions}>
                    {strings.doubleTab},{'\n'}
                    {strings.shake}
                </Text>
                <TouchableOpacity onPress={this._changeLanguage}>
                    <Text style={styles.FacebookLogin}>{language}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
                    <Text style={styles.FacebookLogin}>Navigate to Detail Screen</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    FacebookLogin: {
        textAlignVertical: 'center',
        height: 30,
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor: '#3b5998',
        fontSize: 14,
        color: 'white',
        borderRadius: 3,
        fontWeight: 'bold',
        marginVertical: 20
    }
});
