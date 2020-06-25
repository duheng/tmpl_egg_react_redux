import axios from 'axios'

const initData = async (path) => {
    switch (path) {
        case '/':
            let data = {};
            // await request.config({ url: '/api/user/getUserInfo' }).then(res => {
            //     data = res;
            // });
            return data;
        default:
            return { path };
    }
}

export default initData
