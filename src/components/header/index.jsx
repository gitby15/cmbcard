/**
 * Created by timl on 2017/2/28.
 */
import React, {Component} from 'react';
import style from './header.css';
console.log(style);

class MenuItem {
  constructor(title, icon, desc, url) {
    this.title = title;
    this.icon = icon;
    this.desc = desc || '';
    this.url = url || '';
  }
}


class Header extends Component {

  static defaultProps = {
    menuItem: [
      new MenuItem('首页', null),
      new MenuItem('我的账户', null, '查账、还款、调频'),
      new MenuItem('积分奖励', null),
      new MenuItem('优惠礼遇', null),
      new MenuItem('理财分期', null),
      new MenuItem('我要办卡', null, '查进度、开卡'),
    ]

  };

  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
  }

  entryClickHandler(event) {
    this.setState({
      showMenu: true
    });
  }

  closeClickHandler(event) {
    console.log('aaa');
    console.log(this);
    this.setState({
      showMenu:false
    });

  }

  render() {
    let self = this;
    let {menuItem} = this.props;
    let {showMenu} = this.state;

    let menuElem = showMenu?(
    <aside className={style.menu}>
      <nav className={style.mnav}>
        <div className={style.mtab}>账上生活</div>
        <div className={style.mtab}>智能微客服</div>
        <span className={style.close} onClick={self.closeClickHandler.bind(self)}>+</span>
      </nav>

      <section className={style.mbody}>
        <ul>
          {
            menuItem.map((elem, idx, list)=> {
              return (
                <li className={style.item} key={'item-' + idx}>
                  <i className={style.micon}></i>
                  <div className={style.title}>{elem.title}</div>
                  <div className={style.desc}>{elem.desc}</div>
                </li>);
            })
          }
        </ul>
      </section>
    </aside>
    ):null;



    return (<header className={style.header}>
      <div className={style.logo}>

      </div>
      <div className={style.mentry} onClick={this.entryClickHandler.bind(this)}>

      </div>
      {menuElem}
    </header>)
  }
}


export default Header;
