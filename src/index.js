import React from 'react';
import ReactDOM from 'react-dom';
import Router from '@/router';
import * as serviceWorker from './serviceWorker';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd'

import './index.scss'

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Router />
  </ConfigProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
