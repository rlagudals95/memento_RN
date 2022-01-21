import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import allReducers from './reducers';
import Router from './Router'
import * as Font from 'expo-font'
import {useEffect} from 'react'
import { createBrowserHistory } from "history";
import Navigation from './src/component/Navigation'


const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

// 미들웨어에 history 추가
// 스토어에 히스토리를 넣어주기
export const history = createBrowserHistory();
const middlewares = [thunk.withExtraArgument({ history: history })];
const enhancer = composeEnhancers(applyMiddleware(...middlewares));
const store = createStore(allReducers, enhancer);

export default function App() {

  const getFonts = () => {
    return Font.loadAsync({
      'noto-sans': require('./config/font/NotoSansKR-Regular.otf'),
    })
  }

  useEffect(() => {
    getFonts();
  }, [])
  return (
    <Provider store={store}>
        <View style={styles.container}>   
          <Navigation/>
          <Router/>
          <StatusBar style="auto" />
          <AppBackgroud />     
        </View>
    </Provider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    fontFamily:'noto-sans',
    width: "100%",
    height: "100%"
  },
});

const AppBackgroud = styled.div`
    background: url("https://images.unsplash.com/photo-1601662528567-526cd06f6582?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80");
    background-size: cover;
    position: absolute;
    top: 50%;
    left : 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    z-index: -1;
    opacity: 0.5;
`;
