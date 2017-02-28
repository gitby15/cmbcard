/**
 * Created by timl on 2017/2/28.
 */
import React,{Component} from 'react';
import style from './header.less';
console.log(style);

class Header extends Component {


  render(){



    return (<header className={style.header}>
      <div className={style.logo}>

      </div>
      <aside className={style.menu}></aside>
    </header>)
  }
}


export default Header;