/**
 * Created by timl on 2017/2/28.
 */
import React from 'react';
import ReactDom from 'react-dom';

import Header from './components/header/index.jsx';
import ADCarousel from './components/adCarousel/adCarousel.jsx';

class Home extends React.Component{


  render(){
    return (<div>
      <Header></Header>
      <ADCarousel/>
    </div>)
  }
}











let app = document.getElementById('app');
ReactDom.render(<Home/>,app);
