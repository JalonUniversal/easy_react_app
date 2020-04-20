import React, { Component } from 'react';
import { AppInfo } from '@/components/hooks';
import { enhance } from 'UTILS/decoratars';
import { loadInfo } from 'SERVICE';
import './style';

import { Button } from 'antd';

@enhance
class App extends Component {
  appName = 'Easy-React-App'
  componentDidMount() {
    // this.loadData();
  }
  loadData = async () => {
    const res = await loadInfo();
    this.log('res: ', res);
  }
  render() {
    return (
      <div>
        <img src={require('./assets/react.jpg')} />
        <AppInfo />
        <Button type='primary'>Easy-React-App</Button>
      </div>
    )
  }
}

export default App;