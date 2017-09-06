import WelcomeComponent from "./WelcomeComponent";
import DetailComponent from "./DetailComponent";
import {StackNavigator} from "react-navigation";

export const App = StackNavigator({
    Welcome: {
        screen: WelcomeComponent,
        navigationOptions: {
            header: null
        }
    },
    Detail: {
        screen: DetailComponent,
        navigationOptions: {
            header: null
        }
    },
});