import {createStackNavigator} from "react-navigation-stack";
import {PLASH_SCREEN,HOME_SCREEN} from "../Screens/ScreenNameConstants";
import PlashScreen from "../Screens/PlashScreen";
const mainRouter = createStackNavigator({
    PLASH_SCREEN :{
        screen:PlashScreen,
        navigationOptions:{
            title:"",
            header:null
        }
    },
    HOME_SCREEN:{

    }
});
export default mainRouter;
