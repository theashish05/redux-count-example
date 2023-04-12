import React from 'react'
import { Provider } from "react-redux"
import store from "./redux/store"
import Count from "./components/count"
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <h1>INCREMENT AND DECREMENT</h1>
      <Count />
    </Provider>
  );
}

export default App;
