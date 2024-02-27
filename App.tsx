import React from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { Data } from "./data";
import Routes from "./src/routes";
const App = () => {
    return (
        <SafeAreaView style={{flex:1}}>
            <Routes/>
        </SafeAreaView>
    )
};

export default App 