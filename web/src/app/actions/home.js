import axios from 'axios'
import urls from '../constants/urls'
import * as types from '../constants/ActionTypes'

const fetchHomeList = (params) =>  {
    return async (dispatch, getState) => {
        await axios.get(urls.homeList, {
            params: params
        }).then((res) => {
            const { success, msg , data } = res.data
            if(success) {
                dispatch({
                    type: types.RECEIVE_SHOWLIST,
                    show_list: data,
                })
            } else {
                console.log('接口返回错误:',msg)
            }
        }).catch((err) => {
            console.log('err:',err)
        })
    }
}



const fetchHomeListLocal = (params) =>  {
    return async (dispatch, getState) => {
        await axios.get('assets/mock/home_list.json', {
            params: params
        }).then((res) => {
            console.log('DA----',res)
            const { success, msg , data } = res.data
            if(success) {
                dispatch({
                    type: types.RECEIVE_SHOWLIST,
                    show_list: data,
                })
            } else {
                console.log('接口返回错误:',msg)
            }
        }).catch((err) => {
            console.log('err:',err)
        })
    }
}

export {
    fetchHomeList,
    fetchHomeListLocal
}