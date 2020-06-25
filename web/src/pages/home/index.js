import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import style from './style';
import connect from '../../app/store/connect';
import HomeSelector from '../../app/selectors/home';
import * as HomeActions from '../../app/actions/home';
//import hocb from './hocb'; //高阶函数的两种封装方式
// @hocb('AAAA')
@connect(HomeSelector, HomeActions)
export default class Home extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      success: false
    };
  }
  static fetch() {
    console.log('fetch--home->')
   // return store.dispatch(fetchBookList({page:1,size:20}))
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
   //console.log('home-render---', this.props.home.movies);
    return (
      <div >
        <Link to="/about">
          点击进下一页....
        </Link>
      </div>
    );
  }
}
