import React from 'react'
import { Provider } from "react-redux"
import models from "./models"
import dva from "./utils/dva"

import 'taro-ui/dist/style/index.scss'
import './app.less'

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
})
const store = dvaApp.getStore();

const App = (props: any) => {
  return <Provider store={store}> {props.children} </Provider>
}

export default App
