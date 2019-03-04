/**
 * Created by Mayrc on 02/03/2019.
 */
import React from "react";
import Routes from "./routes";
import {createStackNavigator, createAppContainer} from "react-navigation";
import "./config/StatusBarConfig";

const AppNavigator = createStackNavigator(
    {Routes: {screen: Routes},}
);

const App = createAppContainer(AppNavigator);

// Now AppContainer is the main component for React to render

export default App;