import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './style';
import connect from '../../app/store/connect';
import HomeSelector from '../../app/selectors/home';
import { fetchHomeList , fetchHomeListLocal } from '../../app/actions/home';
import ShowList from './ShowList';
//import hocb from './hocb'; //高阶函数的两种封装方式
// @hocb('AAAA')
@connect(HomeSelector, { fetchHomeList,fetchHomeListLocal })
export default class Home extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      success: false
    };
  }

  static async fetch(store) {
    const PARAM = {
      uuid: 'hxcbrnekaefupn48wy6en4nh5vbills74h3w9nx20kk6w6c7fiua5z53om1xiv3q',
      clientType: 1,
      os: 1,
      sellChannel: 13,
      cityId: 1,
      lng: 0,
      lat: 0
    }
    console.log('st-----',store)
    if(store) {
      return store.dispatch(fetchHomeList(PARAM))
    } else {
      this.props.actions.fetchHomeListLocal(PARAM)
    }

  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   //会在初始化和update时触发，用于替换componentWillReceiveProps，
  //   //可以用来控制 props 更新 state 的过程；它返回一个对象表示新的 state；
  //   //如果不需要更新，返回 null 即可
  //   return null
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return false
  // }
  // getSnapshotBeforeUpdate() {
  //   // 组件即将销毁
  //  // 可以在此处移除订阅，定时器等等
  // }
  componentDidMount() {

    console.log('stticstyle------',this.props.staticContext)
    Home.fetch.call(this)
    
   // if(!window.__INITIAL_STATE__) {
      // const PARAM = {
      //   uuid: 'hxcbrnekaefupn48wy6en4nh5vbills74h3w9nx20kk6w6c7fiua5z53om1xiv3q',
      //   clientType: 1,
      //   os: 1,
      //   sellChannel: 13,
      //   cityId: 1,
      //   lng: 0,
      //   lat: 0
      // }
      // this.props.actions.fetchHomeList(PARAM)
   // }
  //   console.log('hoc---1');
  //   const { actions } = this.props;
  //  // actions.fetchMovies();
  //   setTimeout(_ => {
  //     this.setState({
  //       success: true
  //     });
  //   }, 3000);
  //   console.log(this.props);
  }
  render() {
    const { show_list } = this.props.home
    return (
      <div className='Home'>
        <Link to="/about">
          点击进下一页....
        </Link>
        <div  className='title'>演出列表</div>
        {
          show_list.length > 0 &&
          <ShowList data={show_list}/>
        }
      </div>
    );
  }
}
