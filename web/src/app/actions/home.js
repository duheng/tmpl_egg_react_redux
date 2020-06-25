import axios from 'axios'
import * as urls from '../constants/urls'
import * as types from '../constants/ActionTypes'

const fetchHomeList = (params) =>  {
    return (dispatch, getState) => {
        console.log('urls----', homeList)
        return axios.get(homeList, {
            params: params
        }).then((res) => {
            const { success, msg , data } = res
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

export default {
    fetchHomeList
}