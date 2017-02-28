/**
 * Created by timl on 2017/2/28.
 */
import React from 'react';
import ReactDom from 'react-dom';

import Header from './components/header/index.jsx';

class Home extends React.Component{


  render(){
    return (<div>
      <Header></Header>
    </div>)
  }
}











let app = document.getElementById('app');
ReactDom.render(<Home/>,app);
