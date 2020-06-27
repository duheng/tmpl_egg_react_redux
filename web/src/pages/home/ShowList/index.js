import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './style';

export default class ShowList extends PureComponent {
  constructor(...args) {
    super(...args);
  }

  componentDidMount() {
  
  }
  render() {
    const { data } = this.props
  //   console.log('home-render---', this.props.home);
    return (
      <div className='ShowList'>
        <div className='ShowListMain'>
          <div className='ShowItem ShowListLeft'>
              <img src='https://p0.meituan.net/myvideodistribute/6a37fbae4ddf8dd3d477a1cbd9c9531b1512102.jpg@338w_450h_1c_1e'/>
              <div className='title'>[北京] BOOM！美漫原稿收藏展</div>
              <div className='time'>2020.7.5 11:00 周日</div>
              <div className='price'>
                <span>¥ 30</span>
                <span className='label'>起</span>
              </div>
          </div>
          <div className='ShowItem ShowListRight'>
              <img src='https://p0.meituan.net/myvideodistribute/6a37fbae4ddf8dd3d477a1cbd9c9531b1512102.jpg@338w_450h_1c_1e'/>
              <div className='title'>[北京] BOOM！美漫原稿收藏展</div>
              <div className='time'>2020.7.5 11:00 周日</div>
              <div className='price'>
                <span>¥ 30</span>
                <span className='label'>起</span>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
