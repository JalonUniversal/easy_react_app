import React, { Component } from 'react';
import { Foo } from '@/components/hooks';
import { enhance } from '@/utils/decoratars';
import './style';

@enhance
class App extends Component {
  appName = 'Easy-React-App'
  componentDidMount() {
    this.log(this.xhr);
  }
  render() {
    return (
      <div>
        { this.appName }
        <Foo />
        <img src={require('./assets/react.jpg')} width={200} height={200} />
      </div>
    )
  }
}

export default App;