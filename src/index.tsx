import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import App from './App'
import 'antd/dist/antd.css'
// 自动注入
import './i18n/configs'
import { Provider } from 'react-redux'
import store from './redux/store'
import axios from 'axios'

// 身份验证
axios.defaults.headers['x-icode'] = 'FB80558A73FA658E'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
