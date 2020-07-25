import Axios from 'axios'
import InterFace from '../interface/index';

export function getList(data) {
    return new Promise((resolve, reject) => {
        Axios({
            url: InterFace.List,
            method: 'post',
            data: data,
            headers: {
                'Host': 'rosi.jinyemimi.com',
                'Content-Type': 'application/json',
                'Cookie': 'PHPSESSID=jsulm7oniucgdhlmi16pcq6ts4',
                'Connection': 'keep-alive',
                'Accept': '*/*',
                'User-Agent': 'Dianwan/1.6 (iPhone; iOS 12.4; Scale/3.00)',
                'Accept-Language': 'zh-Hans-CN;q=1',
                'Content-Length': '130',
                'Accept-Encoding': 'gzip, deflate'
            }
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    })
}

export function getDetail(data) {
    return new Promise((resolve, reject) => {
        Axios({
            url: InterFace.Detail,
            method: 'post',
            data: data,
            headers: {
                'Host': 'rosi.jinyemimi.com',
                'Content-Type': 'application/json',
                'Cookie': 'PHPSESSID=jsulm7oniucgdhlmi16pcq6ts4',
                'Connection': 'keep-alive',
                'Accept': '*/*',
                'User-Agent': 'Dianwan/1.6 (iPhone; iOS 12.4; Scale/3.00)',
                'Accept-Language': 'zh-Hans-CN;q=1',
                'Content-Length': '130',
                'Accept-Encoding': 'gzip, deflate'
            }
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    })
}
