/**
 * Created by timl on 2017/3/1.
 */
import React,{Component} from 'react';
import s from './adCarousel.css';

class ADCarouse extends Component {

  render(){
    return (
      <article>
        <div className={s.standby}></div>
        <div className={s.show}></div>
        <div className={s.leave}></div>
      </article>
    )
  }
}

export default ADCarouse;